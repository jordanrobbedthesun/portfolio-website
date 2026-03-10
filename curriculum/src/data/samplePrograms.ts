import type { DegreeProgram } from '../types';

/**
 * FGCU Software Engineering (4-year) Curriculum 2025-2026
 * Based on official degree map effective 05/06/2025
 * Source: Florida Gulf Coast University, Department of Computing and Software Engineering
 */
export const softwareEngineeringProgram: DegreeProgram = {
  id: 'se-2025',
  name: 'Bachelor of Science in Software Engineering',
  code: 'SE',
  totalCredits: 120,
  effectiveAcademicYear: '2025-2026',
  institution: 'Florida Gulf Coast University',
  description: 'A comprehensive software engineering program preparing students for professional practice in the field',
  acknowledgments: 'This flowsheet tool was originally developed by the University at Buffalo School of Engineering and Applied Sciences. Used with permission and adapted for FGCU.',
  courses: [
    // NOTE: Summer term intentionally removed per advising feedback.
    // NOTE: All electives intentionally removed to avoid inaccurate prereq assumptions.

    // ===== YEAR 1 - FALL =====
    {
      course: {
        code: 'ENC 1101',
        name: 'Composition I',
        credits: 3,
        description: 'Academic writing, critical thinking, and argumentation'
      },
      semester: 1,
      year: 1,
      season: 'Fall'
    },
    {
      course: {
        code: 'MAC 2311',
        name: 'Calculus I',
        credits: 4,
        description: 'Limits, continuity, derivatives, and applications'
      },
      semester: 1,
      year: 1,
      season: 'Fall'
    },
    {
      course: {
        code: 'COP 1500',
        name: 'Intro to Computer Science',
        credits: 3,
        description: 'Fundamentals of programming and computational thinking'
      },
      semester: 1,
      year: 1,
      season: 'Fall'
    },

    // ===== YEAR 1 - SPRING =====
    {
      course: {
        code: 'ENC 1102',
        name: 'Composition II',
        credits: 3,
        prereqs: ['ENC 1101'],
        description: 'Advanced academic writing and research skills'
      },
      semester: 2,
      year: 1,
      season: 'Spring'
    },
    {
      course: {
        code: 'MAC 2312',
        name: 'Calculus II',
        credits: 4,
        prereqs: ['MAC 2311'],
        description: 'Integration, techniques of integration, and applications'
      },
      semester: 2,
      year: 1,
      season: 'Spring'
    },
    {
      course: {
        code: 'COP 2006',
        name: 'Programming I',
        credits: 3,
        prereqs: ['COP 1500'],
        description: 'Structured programming, algorithms, and data representation'
      },
      semester: 2,
      year: 1,
      season: 'Spring'
    },
    {
      course: {
        code: 'PHY 2048L',
        name: 'General Physics I and Lab',
        credits: 4,
        prereqs: ['MAC 2311'],
        coreqs: ['MAC 2312'],
        description: 'Mechanics, heat, and thermodynamics with laboratory'
      },
      semester: 2,
      year: 1,
      season: 'Spring'
    },

    // ===== YEAR 2 - FALL (shifted forward after removing Year 1 Summer) =====
    {
      course: {
        code: 'PHY 2049L',
        name: 'General Physics II and Lab',
        credits: 4,
        prereqs: ['PHY 2048L'],
        description: 'Electricity, magnetism, and modern physics with laboratory'
      },
      semester: 3,
      year: 2,
      season: 'Fall'
    },
    {
      course: {
        code: 'MAD 3107',
        name: 'Discrete Mathematics',
        credits: 3,
        prereqs: ['MAC 2311'],
        description: 'Logic, sets, graphs, combinatorics, and algorithms'
      },
      semester: 3,
      year: 2,
      season: 'Fall'
    },
    {
      course: {
        code: 'IDS 3920',
        name: 'University Colloquium',
        credits: 3,
        description: 'Interdisciplinary topics and professional development'
      },
      semester: 3,
      year: 2,
      season: 'Fall'
    },
    {
      course: {
        code: 'COP 3003',
        name: 'Programming II',
        credits: 3,
        prereqs: ['COP 2006', 'MAC 2312'],
        description: 'Advanced programming concepts and object-oriented design'
      },
      semester: 3,
      year: 2,
      season: 'Fall'
    },

    // ===== YEAR 2 - SPRING =====
    {
      course: {
        code: 'COP 3530',
        name: 'Data Structures & Algorithms',
        credits: 3,
        prereqs: ['COP 3003', 'MAD 3107'],
        description: 'Advanced data structures, algorithm design, and complexity analysis'
      },
      semester: 4,
      year: 2,
      season: 'Spring'
    },

    // ===== YEAR 3 - FALL =====
    {
      course: {
        code: 'CEN 3031',
        name: 'Software Engineering Fundamentals',
        credits: 3,
        prereqs: ['COP 3003'],
        description: 'Software development lifecycle, processes, and best practices'
      },
      semester: 5,
      year: 3,
      season: 'Fall'
    },
    {
      course: {
        code: 'COP 4610',
        name: 'Operating Systems',
        credits: 3,
        prereqs: ['COP 3530'],
        coreqs: ['CEN 3031'],
        description: 'Process management, memory, file systems, and concurrency'
      },
      semester: 5,
      year: 3,
      season: 'Fall'
    },

    // ===== YEAR 3 - SPRING =====
    {
      course: {
        code: 'CEN 3073',
        name: 'Requirements Engineering & Analysis',
        credits: 3,
        prereqs: ['CEN 3031'],
        description: 'Requirements elicitation, documentation, and validation'
      },
      semester: 6,
      year: 3,
      season: 'Spring'
    },
    {
      course: {
        code: 'CEN 4072',
        name: 'Software Testing',
        credits: 3,
        prereqs: ['CEN 3031'],
        description: 'Test planning, execution, automated testing, and quality assurance'
      },
      semester: 6,
      year: 3,
      season: 'Spring'
    },
    {
      course: {
        code: 'COP 3710',
        name: 'Intro to Data Engineering',
        credits: 3,
        prereqs: ['COP 3530'],
        description: 'Data pipelines, ETL, and data storage solutions'
      },
      semester: 6,
      year: 3,
      season: 'Spring'
    },
    {
      course: {
        code: 'CEN 3078',
        name: 'Computer Security',
        credits: 3,
        prereqs: ['CEN 3031'],
        description: 'Security principles, cryptography, and secure development'
      },
      semester: 6,
      year: 3,
      season: 'Spring'
    },

    // ===== YEAR 4 - FALL =====
    {
      course: {
        code: 'CEN 4065',
        name: 'Software Architecture & Design',
        credits: 3,
        prereqs: ['COP 3530', 'COP 4610', 'CEN 3031'],
        description: 'Design patterns, microservices, and system architecture'
      },
      semester: 7,
      year: 4,
      season: 'Fall'
    },
    {
      course: {
        code: 'CEN 4934',
        name: 'Senior Software Engineering Project I',
        credits: 3,
        prereqs: ['CEN 3073'],
        coreqs: ['CEN 4065'],
        postreqs: ['CEN 4935'],
        description: 'Capstone project planning, design, and implementation'
      },
      semester: 7,
      year: 4,
      season: 'Fall'
    },

    // ===== YEAR 4 - SPRING =====
    {
      course: {
        code: 'CEN 4935',
        name: 'Senior Software Engineering Project II',
        credits: 3,
        prereqs: ['CEN 4934'],
        description: 'Capstone project continuation and final presentation'
      },
      semester: 8,
      year: 4,
      season: 'Spring'
    }
  ]
};

export const softwareEngineeringProgram2026: DegreeProgram = {
  ...softwareEngineeringProgram,
  id: 'se-2026',
  effectiveAcademicYear: '2026-2027',
  description: 'Software engineering program plan for AY 2026-2027'
};

export const computerScienceProgram2025: DegreeProgram = {
  ...softwareEngineeringProgram,
  id: 'cs-2025',
  name: 'Bachelor of Science in Computer Science',
  code: 'CS',
  effectiveAcademicYear: '2025-2026',
  description: 'Computer science program plan with systems, algorithms, and software foundations'
};

export const computerScienceProgram2026: DegreeProgram = {
  ...computerScienceProgram2025,
  id: 'cs-2026',
  effectiveAcademicYear: '2026-2027',
  description: 'Computer science program plan for AY 2026-2027'
};

export const allPrograms: DegreeProgram[] = [
  softwareEngineeringProgram,
  softwareEngineeringProgram2026,
  computerScienceProgram2025,
  computerScienceProgram2026
];
