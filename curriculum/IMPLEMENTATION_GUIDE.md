# FGCU Degree Flowsheet Tool - Implementation Guide

## Overview

The FGCU Degree Flowsheet Tool is a modern, interactive web application that displays degree program requirements in an easy-to-understand visual format. This guide explains how to use and customize the tool for FGCU's needs.

## What is a Flowsheet?

A flowsheet is a semester-by-semester visual representation of degree requirements. It shows:
- Which courses are taken each semester
- Prerequisite and corequisite relationships between courses
- Total credit hours per semester
- Complete degree pathway from start to graduation

## Key Features

### 1. Interactive Course Cards
- **Hover Highlighting**: Hover over any course to see all related courses
  - Prerequisites (Blue) - Courses that must be taken before
  - Corequisites (Green) - Courses taken at the same time
  - Postrequisites (Red) - Courses that depend on this course
- **Course Tooltips**: See detailed information without leaving the page
- **Visual Design**: Color-coded cards make the flowsheet easy to scan

### 2. Multi-Program Support
The tool can display multiple degree programs with a dropdown selector:
- Switch between different programs instantly
- Each program has its own complete flowsheet
- Easy to compare different degree paths

### 3. Responsive Design
- Works on desktop, tablet, and mobile devices
- Automatically adjusts layout for different screen sizes
- Touch-friendly interface on mobile devices

## How to Add Your Degree Programs

### Step 1: Prepare Course Data

Create a list of all courses in your degree program with:
- Course code (e.g., 'COP 1000')
- Course name (e.g., 'Introduction to Computer Science')
- Credit hours
- Prerequisites (if any)
- Corequisites (if any)
- Course description
- Semester and year when normally taken

### Step 2: Edit the Data File

Edit `src/data/samplePrograms.ts` and follow this structure:

```typescript
export const yourProgramProgram: DegreeProgram = {
  id: 'cs-2024',                      // Unique ID
  name: 'Computer Science',           // Display name
  code: 'CS',                         // Program code
  totalCredits: 120,                  // Total credits required
  effectiveAcademicYear: '2024-2025', // When this curriculum is current
  institution: 'Florida Gulf Coast University',
  description: 'Bachelor of Science in Computer Science',
  acknowledgments: 'Acknowledgment text here',
  courses: [
    // Array of courses (see format below)
  ]
};
```

### Step 3: Add Courses to the Array

For each course, add an entry with proper formatting:

```typescript
{
  course: {
    code: 'COP 1000',
    name: 'Introduction to Computer Science',
    credits: 3,
    description: 'Fundamentals of programming',
    prereqs: [],              // Empty array if no prerequisites
    coreqs: [],               // Empty array if no corequisites
  },
  semester: 1,               // 1-8 for 4-year program
  year: 1,                   // 1-4
  season: 'Fall'             // 'Fall' or 'Spring'
}
```

### Step 4: Define Prerequisites

Prerequisites are crucial for showing relationships. Format:

```typescript
// Single prerequisite
prereqs: ['MTH 141']

// Multiple prerequisites (must have all)
prereqs: ['MTH 141', 'PHY 2048']

// No prerequisites (empty array)
prereqs: []
```

### Step 5: Export Your Program

Add your program to the `allPrograms` array at the bottom:

```typescript
export const allPrograms: DegreeProgram[] = [
  softwareEngineeringProgram,
  computerScienceProgram,
  yourNewProgram
];
```

## Example: Adding Computer Science Program

```typescript
export const computerScienceProgram: DegreeProgram = {
  id: 'cs-2024',
  name: 'Computer Science',
  code: 'CS',
  totalCredits: 120,
  effectiveAcademicYear: '2024-2025',
  institution: 'Florida Gulf Coast University',
  courses: [
    // Year 1, Fall
    {
      course: {
        code: 'COP 1000',
        name: 'Intro to Computer Science',
        credits: 3,
        description: 'Fundamentals of programming and CS'
      },
      semester: 1,
      year: 1,
      season: 'Fall'
    },
    {
      course: {
        code: 'MTH 141',
        name: 'Calculus I',
        credits: 4,
        description: 'Differential calculus'
      },
      semester: 1,
      year: 1,
      season: 'Fall'
    },
    // Year 1, Spring
    {
      course: {
        code: 'COP 2000',
        name: 'Programming I',
        credits: 3,
        prereqs: ['COP 1000'],
        description: 'Object-oriented programming'
      },
      semester: 2,
      year: 1,
      season: 'Spring'
    },
    // ... continue for all 8 semesters
  ]
};
```

## Semester Numbering

Use this system consistently:
- **Semester 1**: Year 1, Fall
- **Semester 2**: Year 1, Spring
- **Semester 3**: Year 2, Fall
- **Semester 4**: Year 2, Spring
- **Semester 5**: Year 3, Fall
- **Semester 6**: Year 3, Spring
- **Semester 7**: Year 4, Fall
- **Semester 8**: Year 4, Spring

## Customizing Colors

To change the color scheme for your institution, edit these files:

### Navbar Background
Edit `src/App.css`:
```css
.navbar {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  /* Change these hex colors to your brand colors */
}
```

### Course Card Colors
Edit `src/components/CourseCard.module.css`:
```css
.courseCard {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  /* Primary course color */
}

.highlighted_current {
  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
  /* Currently selected course color */
}

.highlighted_prerequisite {
  background: linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%);
  /* Prerequisite highlight color */
}
```

## Deployment

### For Local Testing
1. `npm install` - Install dependencies
2. `npm run dev` - Start development server
3. Open `http://localhost:5173`

### For Production
1. `npm run build` - Creates optimized build in `dist/` folder
2. Upload `dist/` folder to your web server
3. Set up server to serve `index.html` for all routes

### Hosting Options
- **GitHub Pages** - Free, static hosting
- **FGCU Web Server** - On-campus hosting
- **Netlify** - Free tier with automatic builds
- **Vercel** - Free tier with great performance
- **AWS S3 + CloudFront** - Production-grade solution

## Maintenance and Updates

### Adding New Programs
1. Create new degree program data in `samplePrograms.ts`
2. Test in development: `npm run dev`
3. Build: `npm run build`
4. Deploy `dist/` folder

### Updating Existing Programs
1. Edit course data in `samplePrograms.ts`
2. Update prerequisite chains
3. Update total credits if changed
4. Rebuild and redeploy

### Testing Prerequisite Chains
1. Start the dev server
2. View the flowsheet
3. Click each course to verify prerequisites display correctly
4. Check that all related courses highlight properly

## Troubleshooting

### Course Not Displaying
- Verify the semester number is 1-8
- Check that year is 1-4
- Ensure season is exactly 'Fall' or 'Spring' (case-sensitive)

### Prerequisites Not Showing
- Verify course codes match exactly (COP 1000 ≠ COP1000)
- Check spelling of course codes in prereqs array
- Ensure prerequisite course exists in same program

### Colors Not Updating
- Clear browser cache (Ctrl+Shift+Delete or Ctrl+F5)
- Make sure CSS files are saved
- Restart dev server if editing CSS

## Performance Optimization

The tool automatically optimizes:
- Lazy rendering of off-screen components
- Memoization of course card components
- CSS module scoping for faster style application
- Efficient state management

For programs with 200+ courses, performance remains smooth and responsive.

## Browser Compatibility

Tested and working on:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile Safari (iOS 14+)
- Mobile Chrome (Android)

## Technical Support for Development

If you need to modify the tool:

1. **Component Structure**: Review `src/components/` for React component organization
2. **Type Safety**: TypeScript types in `src/types.ts` ensure data consistency
3. **Styling**: CSS Modules in each component prevent style conflicts
4. **Data Structure**: `src/data/samplePrograms.ts` contains all curriculum data

## Extending the Tool

The tool can be extended with:
- PDF export functionality
- Student progress tracking
- Search and filtering
- Dark mode
- Multiple language support
- API integration for real-time data
- Course catalog integration

Contact your development team to add features.

## Important Notes

1. **Data Accuracy**: Verify all course requirements with your academic catalog
2. **Prerequisites**: Must be accurate for student planning
3. **Credits**: Total must match degree requirements
4. **Academic Year**: Update when curriculum changes
5. **Advisors**: Train advisors to reference with the flowsheet

---

**Questions?** Contact your Software Engineering Department or IT Support.
