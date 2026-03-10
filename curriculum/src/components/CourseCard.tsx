import React, { useCallback } from 'react';
import type { Course, CourseHighlight } from '../types';
import styles from './CourseCard.module.css';

interface CourseCardProps {
  course: Course;
  onHover?: (course: Course) => void;
  onHoverEnd?: () => void;
  highlights?: CourseHighlight[];
  relationType?: CourseHighlight['type'];
  isTaken?: boolean;
  isAvailableNext?: boolean;
  onToggleTaken?: (courseCode: string) => void;
}

export const CourseCard: React.FC<CourseCardProps> = ({
  course,
  onHover,
  onHoverEnd,
  highlights,
  relationType,
  isTaken = false,
  isAvailableNext = false,
  onToggleTaken
}) => {
  const handleMouseEnter = useCallback(() => {
    if (onHover) {
      onHover(course);
    }
  }, [course, onHover]);

  const handleMouseLeave = useCallback(() => {
    if (onHoverEnd) {
      onHoverEnd();
    }
  }, [onHoverEnd]);

  const handleClick = useCallback(() => {
    if (onToggleTaken) {
      onToggleTaken(course.code);
    }
  }, [course.code, onToggleTaken]);

  const getHighlightClass = () => {
    const highlight = relationType ?? highlights?.find(h => h.courseCode === course.code)?.type;
    if (!highlight) return '';
    
    switch (highlight) {
      case 'prereq-sequence':
        return styles.highlighted_prereq_sequence;
      case 'prereq':
        return styles.highlighted_prerequisite;
      case 'coreq':
        return styles.highlighted_corequisite;
      case 'post-coreq':
        return styles.highlighted_post_coreq;
      case 'postreq-sequence':
        return styles.highlighted_postrequisite;
      case 'current':
        return styles.highlighted_current;
      default:
        return '';
    }
  };

  const getRelationLabel = () => {
    const highlight = relationType ?? highlights?.find(h => h.courseCode === course.code)?.type;
    switch (highlight) {
      case 'prereq-sequence':
        return 'Prereq Seq';
      case 'prereq':
        return 'Prereq';
      case 'current':
        return 'Current';
      case 'postreq-sequence':
        return 'Postreq Seq';
      case 'post-coreq':
        return 'Post Coreq';
      case 'coreq':
        return 'Coreq';
      default:
        return null;
    }
  };

  const relationLabel = getRelationLabel();

  return (
    <div
      className={`${styles.courseCard} ${isTaken ? styles.taken : ''} ${isAvailableNext ? styles.availableNext : ''} ${getHighlightClass()}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      title={isTaken ? `Mark ${course.code} as not taken` : `Mark ${course.code} as taken`}
    >
      <div className={styles.cardStatusRow}>
        <div className={`${styles.cardBadge} ${isTaken ? styles.cardBadgeTaken : isAvailableNext ? styles.cardBadgeAvailable : styles.cardBadgeDefault}`}>
          {isTaken ? 'Taken' : isAvailableNext ? 'Next' : 'Course'}
        </div>
      </div>
      <div className={styles.courseCode}>{course.code}</div>
      <div className={styles.courseName}>{course.name}</div>
      <div className={styles.courseCredits}>{course.credits} hrs</div>
      <div className={`${styles.relationTag} ${!relationLabel ? styles.relationTagHidden : ''}`}>
        {relationLabel ?? '\u00A0'}
      </div>
    </div>
  );
};
