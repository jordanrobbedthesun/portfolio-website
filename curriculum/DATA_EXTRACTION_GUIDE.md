# Data Extraction Guide - FGCU Software Engineering Flowsheet

## Overview

This guide helps you convert existing FGCU degree flowsheet data (from PDFs, Excel files, or other formats) into the JSON/TypeScript data structure used by the interactive flowsheet tool.

## Data Extraction Workflow

### Step 1: Gather Source Information

Before you start coding, collect:
- The current FGCU degree program PDF or E-Draw flowsheet
- Course catalog with all course information
- Prerequisites for each course
- Total program credit hours
- Current effective academic year
- Any curriculum notes or special requirements

### Step 2: Organize Course Information

Create a spreadsheet with these columns:

| Course Code | Course Name | Credits | Year | Semester | Prerequisites | Corequisites | Description |
|-------------|-------------|---------|------|----------|---|---|---|
| COP 1000 | Intro to CS | 3 | 1 | Fall | None | None | Fundamentals... |
| COP 2000 | Programming I | 3 | 1 | Spring | COP 1000 | | OOP basics... |
| MTH 141 | Calculus I | 4 | 1 | Fall | None | None | Differential... |

### Step 3: Validate Prerequisites

Important checks:
- Verify prerequisites exist in the program
- Confirm prerequisite courses appear BEFORE dependent courses in the timeline
- Note any courses with multiple prerequisites
- Identify corequisites (courses taken simultaneously)

### Step 4: Create TypeScript Data Structure

Using your spreadsheet, create the data structure:

```typescript
export const yourProgramName: DegreeProgram = {
  id: 'program-code-year',        // Unique identifier
  name: 'Full Program Name',       // Display name
  code: 'SHORT',                   // 2-4 letter code
  totalCredits: 120,               // Sum of all credits
  effectiveAcademicYear: '2024-2025',
  institution: 'Florida Gulf Coast University',
  courses: [
    // Year 1 courses here
    // Year 2 courses here
    // etc.
  ]
};
```

## Example: Converting FGCU Software Engineering

### Source Data (From PDF/E-Draw)
```
YEAR 1 - FALL
- MTH 141: Calculus I (4 credits)
- COP 1000: Intro to CS (3 credits)
- CHM 1030: General Chemistry I (4 credits)
- ENG 1100: English Composition I (3 credits)
- ENGR 1020: Engineering Design I (2 credits)
Total: 16 credits

YEAR 1 - SPRING
- MTH 142: Calculus II (4 credits) [Prereq: MTH 141]
- COP 2000: Programming I (3 credits) [Prereq: COP 1000]
- PHY 2048: Physics I (4 credits) [Prereq: MTH 141]
- ENG 1100: English Composition II (3 credits)
- GEL 1010: Geology (3 credits)
Total: 17 credits
```

### Converted Data Structure

```typescript
const softwareEngineeringProgram: DegreeProgram = {
  id: 'se-2024',
  name: 'Software Engineering',
  code: 'SE',
  totalCredits: 120,
  effectiveAcademicYear: '2024-2025',
  institution: 'Florida Gulf Coast University',
  courses: [
    // YEAR 1 - FALL
    {
      course: {
        code: 'MTH 141',
        name: 'Calculus I',
        credits: 4,
        description: 'Limits, continuity, derivatives, applications'
      },
      semester: 1,
      year: 1,
      season: 'Fall'
    },
    {
      course: {
        code: 'COP 1000',
        name: 'Intro to Computer Science',
        credits: 3,
        description: 'Fundamentals of programming and computer science'
      },
      semester: 1,
      year: 1,
      season: 'Fall'
    },
    // ... more Fall courses
    
    // YEAR 1 - SPRING
    {
      course: {
        code: 'MTH 142',
        name: 'Calculus II',
        credits: 4,
        prereqs: ['MTH 141'],
        description: 'Integration and applications'
      },
      semester: 2,
      year: 1,
      season: 'Spring'
    },
    {
      course: {
        code: 'COP 2000',
        name: 'Programming I (C++)',
        credits: 3,
        prereqs: ['COP 1000'],
        description: 'Object-oriented programming fundamentals'
      },
      semester: 2,
      year: 1,
      season: 'Spring'
    },
    // ... continue for Years 2, 3, 4
  ]
};
```

## Mapping Semesters

Always use this consistent numbering:

```typescript
// Standard 4-year program
Semester 1 = Year 1, Fall
Semester 2 = Year 1, Spring
Semester 3 = Year 2, Fall
Semester 4 = Year 2, Spring
Semester 5 = Year 3, Fall
Semester 6 = Year 3, Spring
Semester 7 = Year 4, Fall
Semester 8 = Year 4, Spring

// In the code:
{
  semester: 1,  // Year 1, Fall
  year: 1,
  season: 'Fall'
}
```

## Handling Special Cases

### Multiple Prerequisites
```typescript
{
  course: {
    code: 'COP 4930',
    name: 'Senior Design I',
    credits: 4,
    prereqs: ['COP 4020', 'COP 4610'],  // Both required
    description: 'Capstone software engineering project'
  },
  semester: 7,
  year: 4,
  season: 'Fall'
}
```

### Corequisite (Taken Together)
```typescript
{
  course: {
    code: 'PHY 2048',
    name: 'Physics I',
    credits: 4,
    prereqs: ['MTH 141'],
    coreqs: ['PHY 2048L'],  // Lab taken same semester
    description: 'Mechanics: kinematics, dynamics, energy'
  },
  semester: 2,
  year: 1,
  season: 'Spring'
}
```

### Electives
```typescript
{
  course: {
    code: 'COMP 3900',
    name: 'Technical Elective I',
    credits: 3,
    prereqs: ['COP 2100'],
    description: 'Student selects from list of approved electives'
  },
  semester: 6,
  year: 3,
  season: 'Spring'
}
```

## Data Validation Checklist

Before deploying, verify:

- [ ] All course codes match official course catalog
- [ ] Credit hours are accurate
- [ ] Total program credits = sum of all course credits
- [ ] Prerequisites appear BEFORE dependent courses
- [ ] No circular dependencies (A requires B, B requires C, C requires A)
- [ ] All prerequisite course codes exist in the program
- [ ] Semester/year combinations are correct (1-4 years, Fall/Spring)
- [ ] At least one course per semester
- [ ] Course names match official catalog
- [ ] Effective academic year is current

## Automated Validation Script

Here's a helper function to validate your data:

```typescript
function validateProgram(program: DegreeProgram): string[] {
  const errors: string[] = [];
  const courseMap = new Map(program.courses.map(sc => [sc.course.code, sc]));
  
  // Check total credits
  const totalCalc = program.courses.reduce((sum, sc) => sum + sc.course.credits, 0);
  if (totalCalc !== program.totalCredits) {
    errors.push(`Total credits mismatch: expected ${program.totalCredits}, got ${totalCalc}`);
  }
  
  // Check prerequisites exist
  program.courses.forEach(sc => {
    if (sc.course.prereqs) {
      sc.course.prereqs.forEach(prereq => {
        const prereqCourse = courseMap.get(prereq);
        if (!prereqCourse) {
          errors.push(`Missing prerequisite course: ${prereq} (required by ${sc.course.code})`);
        } else if (prereqCourse.semester >= sc.semester) {
          errors.push(`Invalid sequence: ${prereq} (sem ${prereqCourse.semester}) should be before ${sc.course.code} (sem ${sc.semester})`);
        }
      });
    }
  });
  
  return errors;
}

// Usage:
const errors = validateProgram(softwareEngineeringProgram);
if (errors.length > 0) {
  console.error('Validation errors:', errors);
} else {
  console.log('Program data is valid!');
}
```

## Converting From Different Formats

### From Excel/Google Sheets
1. Export as CSV
2. Copy/paste into your IDE
3. Format each line as a course object
4. Use find/replace to speed up formatting

### From PDF Flowsheet
1. Manually read through the PDF
2. Create spreadsheet (recommended)
3. Verify prerequisites by checking course descriptions
4. Convert to TypeScript using spreadsheet as reference

### From E-Draw Diagram
1. If exportable: Use matrix/table export
2. If not: Manually transcribe semester layout
3. Cross-reference with course catalog for prerequisites
4. Verify in the interactive tool

## Tips for Accuracy

1. **Use Official Catalog**: Always reference the official FGCU course catalog for prerequisites
2. **Verify with Advisors**: Have academic advisors review the data
3. **Test Thoroughly**: Use the interactive tool to verify all relationships
4. **Keep Original**: Archive the original PDF/E-Draw file
5. **Document Changes**: When updating, note what changed and why

## Quick Reference: Course Object

```typescript
{
  course: {
    code: string;          // 'COP 1000'
    name: string;          // 'Intro to Computer Science'
    credits: number;       // 3, 4, etc.
    description?: string;  // Optional detailed description
    prereqs?: string[];    // ['COP 1000', 'MTH 141']
    coreqs?: string[];     // ['PHY 2048L']
    postreqs?: string[];   // ['COP 2100']
    notes?: string;        // Optional notes
  },
  semester: number;        // 1-8
  year: number;            // 1-4
  season: 'Fall' | 'Spring';
}
```

## Next Steps

1. Extract your degree program data using this guide
2. Create a new DegreeProgram object in `src/data/samplePrograms.ts`
3. Add it to the `allPrograms` export
4. Run `npm run dev` to test
5. Verify all prerequisite chains work correctly
6. Deploy to your web server

---

For questions about data format or extraction, consult the IMPLEMENTATION_GUIDE.md.
