# FGCU Degree Flowsheet Tool - Developer Quick Reference

## Quick Start

```bash
# First time setup
npm install

# Development
npm run dev          # Start dev server at http://localhost:5173

# Production
npm run build        # Create optimized dist/ folder
npm run preview      # Test production build locally
```

## File Structure Quick Reference

```
src/
├── types.ts                    # TypeScript interfaces (update here for new data types)
├── data/samplePrograms.ts      # 👈 ADD YOUR DEGREE PROGRAMS HERE
├── components/
│   ├── CourseCard.tsx          # Single course display
│   ├── SemesterGrid.tsx        # Main flowsheet layout
│   └── ProgramSelector.tsx     # Program dropdown
├── App.tsx                     # Main component
└── index.css                   # Global styles
```

## Common Tasks

### Add a New Program

1. **Open** `src/data/samplePrograms.ts`
2. **Create** new DegreeProgram object:
```typescript
export const myProgram: DegreeProgram = {
  id: 'program-code',
  name: 'Program Name',
  code: 'CODE',
  totalCredits: 120,
  effectiveAcademicYear: '2024-2025',
  institution: 'Florida Gulf Coast University',
  courses: [ /* add courses */ ]
};
```
3. **Add** to `allPrograms` export
4. **Test**: `npm run dev`

### Add a Course

```typescript
{
  course: {
    code: 'COP 2100',
    name: 'Programming II',
    credits: 3,
    prereqs: ['COP 1000'],
    description: 'Object-oriented programming'
  },
  semester: 3,      // 1-8 for 4-year program
  year: 2,          // 1-4
  season: 'Fall'    // 'Fall' or 'Spring'
}
```

### Update Colors

**Brand Color**: `src/App.css` lines 8-9
**Course Cards**: `src/components/CourseCard.module.css`
**Text Colors**: `src/index.css`

### Test Locally

```bash
npm run dev         # Runs on http://localhost:5173
# Changes auto-reload in browser
```

## TypeScript Types

```typescript
// Types you'll use
type DegreeProgram = {
  id: string;
  name: string;
  code: string;
  totalCredits: number;
  effectiveAcademicYear: string;
  courses: SemesterCourse[];
}

type Course = {
  code: string;
  name: string;
  credits: number;
  prereqs?: string[];    // Course codes
  coreqs?: string[];     // Course codes
}

type SemesterCourse = {
  course: Course;
  semester: number;  // 1-8
  year: number;      // 1-4
  season: 'Fall' | 'Spring';
}
```

## Production Checklist

- [ ] All programs in `samplePrograms.ts`
- [ ] All courses have correct semester/year
- [ ] Prerequisites verified with catalog
- [ ] Credits total correctly
- [ ] No console errors: `npm run build`
- [ ] Tested in Chrome, Firefox, Safari
- [ ] Tested on mobile
- [ ] Colors match brand
- [ ] README.md updated

## Deployment Quick Reference

```bash
# Build
npm run build

# Options:
# 1. Copy dist/ to FGCU web server
# 2. Push to GitHub (GitHub Pages)
# 3. Connect Netlify (auto-deploy on push)
# 4. Connect Vercel (auto-deploy on push)

# See DEPLOYMENT_GUIDE.md for details
```

## Component Props

### CourseCard
```typescript
<CourseCard
  course={courseObject}
  onHover={(highlights) => { /* show highlights */ }}
  onHoverEnd={() => { /* clear highlights */ }}
  highlights={highlightArray}
  isHighlighted={boolean}
/>
```

### SemesterGrid
```typescript
<SemesterGrid program={degreeProgram} />
```

### ProgramSelector
```typescript
<ProgramSelector
  programs={allPrograms}
  selectedProgram={currentProgram}
  onSelectProgram={(program) => { /* set program */ }}
/>
```

## CSS Class Names (for customization)

```css
.courseCard              /* Individual course box */
.courseCard:hover       /* Hover state */
.highlighted_current    /* Selected course color */
.highlighted_prerequisite
.highlighted_corequisite
.highlighted_postrequisite

.semester               /* Semester container */
.semesterHeader         /* Semester title area */
.courseGrid             /* Course cards grid */

.navbar                 /* Top header */
.navbar-title           /* Main title */
.navbar-subtitle        /* Subtitle */
```

## Debugging Tips

### Check for Errors
```bash
# Terminal errors
npm run build

# Browser console
F12 or Ctrl+Shift+I
# Look for red errors
```

### Test Prerequisites
```typescript
// In browser console:
// All courses should highlight when hovering
// Prerequisite codes must match exactly (case-sensitive)
```

### Verify Data
```typescript
// In samplePrograms.ts:
// - All semester numbers 1-8
// - All years 1-4
// - All seasons 'Fall' or 'Spring' (exact case)
// - No duplicate course codes per program
```

## Performance Tips

- Keep courses organized by year/semester
- Prerequisites must appear before dependent courses
- Total credits should match sum of all courses
- Use descriptive course names
- Keep data clean and consistent

## Useful VS Code Extensions

- **ES7+ React/Redux/React-Native snippets**
- **Prettier** (code formatter)
- **CSS Modules** (syntax highlighting)
- **Error Lens** (inline errors)

## Environment Variable (if needed later)

```bash
# .env.local (not included in git)
VITE_API_URL=http://localhost:3000
```

## npm Scripts

```bash
npm run dev         # Development server
npm run build      # Production build
npm run preview    # Test production build
npm install        # Install dependencies
npm update        # Update dependencies
```

## Common Issues & Quick Fixes

| Issue | Solution |
|-------|----------|
| "Module not found" | `npm install` |
| "Port 5173 in use" | `npm run dev -- --port 5174` |
| Styles not showing | Clear cache: Ctrl+Shift+Delete |
| Old data showing | `npm run build` again |
| Highlight not working | Check prerequisite code spelling |
| Missing course | Check it's in `allPrograms` |

## Directory for New Files

```
src/
├── data/          # Course data
├── components/    # React components
├── types.ts       # Types (import type { DegreeProgram } from '../types')
├── App.tsx        # Main component
└── index.css      # Global styles
```

## Import Examples

```typescript
// Import types (use 'type' keyword)
import type { DegreeProgram, Course } from '../types';

// Import components (no 'type' keyword)
import { CourseCard } from './components/CourseCard';

// Import data
import { allPrograms } from './data/samplePrograms';

// Import styles
import styles from './components/CourseCard.module.css';
import './App.css';
```

## Testing Your Programs

```bash
npm run dev
# 1. Check all courses appear
# 2. Check course counts per semester
# 3. Check credits total correctly
# 4. Hover over courses to test highlights
# 5. Check mobile layout (F12 → responsive)
```

## Before Committing

```bash
# Format code
npx prettier --write "src/**/*.{ts,tsx,css}"

# Check for errors
npm run build

# Test locally
npm run dev
```

## Useful Links

- [React Docs](https://react.dev)
- [TypeScript Docs](https://www.typescriptlang.org/docs/)
- [Vite Docs](https://vitejs.dev/)
- [CSS Modules](https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/)
- [MDN Web Docs](https://developer.mozilla.org/)

## Team Communication Template

When updating a program, document:
```
Program: [Name]
Changes: [What changed]
Verified By: [Advisor name]
Effective: [Academic year]
Date: [Today's date]
```

---

**Questions?** Check the full documentation in project root folder.
