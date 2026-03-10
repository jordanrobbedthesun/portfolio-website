/**
 * Core type definitions for the FGCU Degree Flowsheet Tool
 */

export interface Course {
  code: string;
  name: string;
  credits: number;
  prereqs?: string[]; // Course codes
  coreqs?: string[]; // Course codes
  postreqs?: string[]; // Course codes
  description?: string;
  notes?: string;
}

export interface SemesterCourse {
  course: Course;
  semester: number; // 1-8 for 4-year program
  year: number; // 1-4
  season: 'Fall' | 'Spring';
}

export interface DegreeProgram {
  id: string;
  name: string;
  code: string;
  totalCredits: number;
  description?: string;
  effectiveAcademicYear: string;
  courses: SemesterCourse[];
  institution: string;
  acknowledgments?: string;
}

export interface FlowsheetData {
  programs: DegreeProgram[];
  lastUpdated: string;
  version: string;
}

export interface CourseHighlight {
  courseCode: string;
  type:
    | 'prereq-sequence'
    | 'prereq'
    | 'current'
    | 'postreq-sequence'
    | 'post-coreq'
    | 'coreq';
}
