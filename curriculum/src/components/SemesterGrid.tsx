import React, { useState, useCallback, useEffect, useMemo } from 'react';
import type { DegreeProgram, CourseHighlight, SemesterCourse, Course } from '../types';
import { CourseCard } from './CourseCard';
import styles from './SemesterGrid.module.css';

interface SemesterGridProps {
  program: DegreeProgram;
}

export const SemesterGrid: React.FC<SemesterGridProps> = ({ program }) => {
  const [highlightedCourses, setHighlightedCourses] = useState<CourseHighlight[]>([]);
  const [takenCourses, setTakenCourses] = useState<string[]>([]);

  const allCourses = program.courses.map(sc => sc.course);
  const courseMap = new Map(allCourses.map(course => [course.code, course]));
  const storageKey = `flowsheet-taken-${program.id}`;

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const saved = window.localStorage.getItem(storageKey);
    if (saved) {
      try {
        const parsed = JSON.parse(saved) as string[];
        setTakenCourses(parsed);
      } catch {
        window.localStorage.removeItem(storageKey);
      }
    }
  }, [storageKey]);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    window.localStorage.setItem(storageKey, JSON.stringify(takenCourses));
  }, [storageKey, takenCourses]);

  const getPrereqSequence = useCallback((courseCode: string, visited = new Set<string>()): string[] => {
    if (visited.has(courseCode)) {
      return [];
    }
    visited.add(courseCode);
    const course = courseMap.get(courseCode);
    if (!course?.prereqs || course.prereqs.length === 0) {
      return [];
    }

    const sequence: string[] = [];
    course.prereqs.forEach(prereqCode => {
      sequence.push(prereqCode);
      sequence.push(...getPrereqSequence(prereqCode, visited));
    });
    return [...new Set(sequence)];
  }, [courseMap]);

  const getPostreqSequence = useCallback((courseCode: string, visited = new Set<string>()): string[] => {
    if (visited.has(courseCode)) {
      return [];
    }
    visited.add(courseCode);

    const sequence: string[] = [];
    allCourses.forEach(course => {
      if (course.code !== courseCode && course.prereqs?.includes(courseCode)) {
        sequence.push(course.code);
        sequence.push(...getPostreqSequence(course.code, visited));
      }
    });
    return [...new Set(sequence)];
  }, [allCourses]);

  const buildRelationshipHighlights = useCallback((course: Course): CourseHighlight[] => {
    const directPrereqs = new Set(course.prereqs || []);
    const directCoreqs = new Set(course.coreqs || []);

    const postCoreqs = new Set(
      allCourses
        .filter(c => c.code !== course.code && c.coreqs?.includes(course.code))
        .map(c => c.code)
    );

    const fullPrereqSequence = new Set(getPrereqSequence(course.code));
    const prereqOnlySequence = [...fullPrereqSequence].filter(code => !directPrereqs.has(code));

    const fullPostreqSequence = new Set(getPostreqSequence(course.code));

    const highlights: CourseHighlight[] = [{ courseCode: course.code, type: 'current' }];

    prereqOnlySequence.forEach(code => highlights.push({ courseCode: code, type: 'prereq-sequence' }));
    directPrereqs.forEach(code => highlights.push({ courseCode: code, type: 'prereq' }));
    directCoreqs.forEach(code => highlights.push({ courseCode: code, type: 'coreq' }));
    postCoreqs.forEach(code => highlights.push({ courseCode: code, type: 'post-coreq' }));
    fullPostreqSequence.forEach(code => highlights.push({ courseCode: code, type: 'postreq-sequence' }));

    const priorityOrder: CourseHighlight['type'][] = [
      'current',
      'prereq',
      'coreq',
      'post-coreq',
      'postreq-sequence',
      'prereq-sequence'
    ];

    const deduped = new Map<string, CourseHighlight>();
    priorityOrder.forEach(type => {
      highlights
        .filter(h => h.type === type)
        .forEach(h => {
          if (!deduped.has(h.courseCode)) {
            deduped.set(h.courseCode, h);
          }
        });
    });

    return [...deduped.values()];
  }, [allCourses, getPostreqSequence, getPrereqSequence]);

  const handleCourseHover = useCallback((course: Course) => {
    setHighlightedCourses(buildRelationshipHighlights(course));
  }, [buildRelationshipHighlights]);

  const handleCourseHoverEnd = useCallback(() => {
    setHighlightedCourses([]);
  }, []);

  const handleToggleTaken = useCallback((courseCode: string) => {
    setTakenCourses(prev => (
      prev.includes(courseCode)
        ? prev.filter(code => code !== courseCode)
        : [...prev, courseCode]
    ));
  }, []);

  const handleClearTaken = useCallback(() => {
    setTakenCourses([]);
  }, []);

  const isCourseEligible = useCallback((course: Course, takenSet: Set<string>) => {
    if (takenSet.has(course.code)) {
      return false;
    }

    const prereqsMet = (course.prereqs || []).every(prereq => takenSet.has(prereq));
    if (!prereqsMet) {
      return false;
    }

    const coreqsSatisfied = (course.coreqs || []).every(coreqCode => {
      if (takenSet.has(coreqCode)) {
        return true;
      }

      const coreqCourse = courseMap.get(coreqCode);
      if (!coreqCourse) {
        return false;
      }

      return (coreqCourse.prereqs || []).every(prereq => takenSet.has(prereq));
    });

    return coreqsSatisfied;
  }, [courseMap]);

  const availableNextCourses = useMemo(() => {
    const takenSet = new Set(takenCourses);

    return program.courses
      .filter(sc => isCourseEligible(sc.course, takenSet))
      .sort((left, right) => {
        if (left.year !== right.year) {
          return left.year - right.year;
        }

        if (left.season !== right.season) {
          return left.season === 'Fall' ? -1 : 1;
        }

        return left.course.code.localeCompare(right.course.code);
      });
  }, [isCourseEligible, program.courses, takenCourses]);

  const nextTerm = useMemo(() => {
    if (availableNextCourses.length === 0) {
      return null;
    }

    return {
      year: availableNextCourses[0].year,
      season: availableNextCourses[0].season,
    };
  }, [availableNextCourses]);

  const recommendedNextTermCourses = useMemo(() => {
    if (!nextTerm) {
      return [];
    }

    return availableNextCourses.filter(
      course => course.year === nextTerm.year && course.season === nextTerm.season
    );
  }, [availableNextCourses, nextTerm]);

  const availableNextCodes = useMemo(
    () => new Set(availableNextCourses.map(course => course.course.code)),
    [availableNextCourses]
  );

  // Group courses by year and semester
  const years = [1, 2, 3, 4];
  const semesters = ['Fall', 'Spring'] as const;

  const getCoursesByYearSemester = (year: number, season: 'Fall' | 'Spring'): SemesterCourse[] => {
    return program.courses.filter(
      sc => sc.year === year && sc.season === season
    );
  };

  const calculateSemesterCredits = (year: number, season: 'Fall' | 'Spring'): number => {
    return getCoursesByYearSemester(year, season).reduce(
      (sum, sc) => sum + sc.course.credits,
      0
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>{program.name}</h1>
        <p className={styles.description}>{program.description}</p>
        <div className={styles.metadata}>
          <span>Total Credits: {program.totalCredits}</span>
          <span>Effective AY: {program.effectiveAcademicYear}</span>
        </div>
      </div>

      <div className={styles.legend}>
        <div className={styles.legendHeader}>
          <h3>Relationship Key</h3>
        </div>
        <div className={styles.legendCompact}>
          <div className={styles.legendItem}>
            <div className={styles.legendBox + ' ' + styles.current}></div>
            <span>Current</span>
          </div>
          <div className={styles.legendItem}>
            <div className={styles.legendBox + ' ' + styles.prereqSequence}></div>
            <span>Prereq Sequence</span>
          </div>
          <div className={styles.legendItem}>
            <div className={styles.legendBox + ' ' + styles.prerequisite}></div>
            <span>Prereq</span>
          </div>
          <div className={styles.legendItem}>
            <div className={styles.legendBox + ' ' + styles.corequisite}></div>
            <span>Coreq</span>
          </div>
          <div className={styles.legendItem}>
            <div className={styles.legendBox + ' ' + styles.postCoreq}></div>
            <span>Post Coreq</span>
          </div>
          <div className={styles.legendItem}>
            <div className={styles.legendBox + ' ' + styles.postrequisite}></div>
            <span>Postreq Sequence</span>
          </div>
        </div>
      </div>

      <div className={styles.plannerPanel}>
        <div className={styles.plannerHeader}>
          <div>
            <h3>Course Planner</h3>
            <p>Click course cards to mark them taken. Bright green cards are available next.</p>
          </div>
          <button type="button" className={styles.clearButton} onClick={handleClearTaken}>
            Clear Taken Courses
          </button>
        </div>
        <div className={styles.plannerStats}>
          <span>{takenCourses.length} taken</span>
          <span>{availableNextCourses.length} available next</span>
        </div>
        <div className={styles.plannerLegend}>
          <div className={styles.legendItem}>
            <div className={styles.legendBox + ' ' + styles.taken}></div>
            <span>Taken course</span>
          </div>
          <div className={styles.legendItem}>
            <div className={styles.legendBox + ' ' + styles.available}></div>
            <span>Available next course</span>
          </div>
        </div>
        <div className={styles.plannerSections}>
          <div className={styles.plannerSection}>
            <h4>
              {nextTerm
                ? `Recommended Next Term: Year ${nextTerm.year} ${nextTerm.season}`
                : 'Recommended Next Term'}
            </h4>
            <div className={styles.availableList}>
              {recommendedNextTermCourses.length > 0 ? (
                recommendedNextTermCourses.map(semesterCourse => (
                  <div
                    key={semesterCourse.course.code}
                    className={styles.availableChip}
                  >
                    {semesterCourse.course.code}: {semesterCourse.course.name}
                  </div>
                ))
              ) : (
                <p className={styles.emptyState}>No next courses available yet. Mark completed courses to begin planning.</p>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.yearsContainer}>
        {years.map(year => (
          <div key={year} className={styles.year}>
            <h2 className={styles.yearTitle}>Year {year}</h2>
            <div className={styles.semestersContainer}>
              {semesters.map(semester => {
                const courses = getCoursesByYearSemester(year, semester);
                const credits = calculateSemesterCredits(year, semester);
                return (
                  <div key={`${year}-${semester}`} className={styles.semester}>
                    <div className={styles.semesterHeader}>
                      <h3>{semester}</h3>
                      <span className={styles.creditsLabel}>{credits} hrs</span>
                    </div>
                    <div className={styles.courseGrid}>
                      {courses.map(sc => (
                        <CourseCard
                          key={`${sc.course.code}-${year}-${semester}`}
                          course={sc.course}
                          onHover={handleCourseHover}
                          onHoverEnd={handleCourseHoverEnd}
                          highlights={highlightedCourses}
                          relationType={highlightedCourses.find(h => h.courseCode === sc.course.code)?.type}
                          isTaken={takenCourses.includes(sc.course.code)}
                          isAvailableNext={availableNextCodes.has(sc.course.code)}
                          onToggleTaken={handleToggleTaken}
                        />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className={styles.info}>
        <h3>About This Flowsheet</h3>
        <p>
          This interactive flowsheet provides a semester-by-semester outline of courses within the curriculum. 
          The flowsheet enables students and advisors to visualize the prerequisites, corequisites, and 
          postrequisites associated with each course. This tool provides guidance regarding course scheduling 
          and helps students understand how courses within the curriculum are linked.
        </p>
        <p>
          <strong>Note:</strong> While efforts have been made to ensure accuracy, final responsibility for 
          meeting graduation requirements resides with the student. Using this tool does not take the place 
          of meeting with your academic advisor.
        </p>
      </div>
    </div>
  );
};
