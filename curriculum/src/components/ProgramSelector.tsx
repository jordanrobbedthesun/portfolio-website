import React from 'react';
import type { DegreeProgram } from '../types';
import styles from './ProgramSelector.module.css';

interface ProgramSelectorProps {
  programs: DegreeProgram[];
  selectedProgram: DegreeProgram;
  selectedMajorCode: string;
  selectedAcademicYear: string;
  onSelectMajor: (majorCode: string) => void;
  onSelectAcademicYear: (academicYear: string) => void;
}

export const ProgramSelector: React.FC<ProgramSelectorProps> = ({
  programs,
  selectedProgram,
  selectedMajorCode,
  selectedAcademicYear,
  onSelectMajor,
  onSelectAcademicYear
}) => {
  const majors = Array.from(
    new Map(programs.map(program => [program.code, { code: program.code, name: program.name }])).values()
  );

  const majorPrograms = programs.filter(program => program.code === selectedMajorCode);
  const academicYears = Array.from(new Set(majorPrograms.map(program => program.effectiveAcademicYear))).sort();

  if (programs.length <= 1 && academicYears.length <= 1) {
    return null;
  }

  return (
    <div className={styles.selector}>
      <div className={styles.field}>
        <label htmlFor="major-select">Major:</label>
        <select
          id="major-select"
          value={selectedMajorCode}
          onChange={(e) => onSelectMajor(e.target.value)}
          className={styles.select}
        >
          {majors.map(major => (
            <option key={major.code} value={major.code}>
              {major.name} ({major.code})
            </option>
          ))}
        </select>
      </div>

      <div className={styles.field}>
        <label htmlFor="ay-select">Effective AY:</label>
        <select
          id="ay-select"
          value={selectedAcademicYear}
          onChange={(e) => onSelectAcademicYear(e.target.value)}
          className={styles.select}
        >
          {academicYears.map(academicYear => (
            <option key={academicYear} value={academicYear}>
              {academicYear}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.meta}>
        <span>{selectedProgram.totalCredits} Credits</span>
      </div>
    </div>
  );
};
