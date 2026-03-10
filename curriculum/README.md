# FGCU Degree Flowsheet Tool

An interactive web application for visualizing degree program requirements and course sequences at Florida Gulf Coast University. This tool helps students and advisors understand prerequisite relationships, course scheduling, and graduation requirements.

## Features

- **Interactive Flowsheet Display**: Visualize semester-by-semester course requirements in a clear, organized grid
- **Prerequisite Visualization**: Hover over courses to highlight prerequisite, corequisite, and postrequisite chains
- **Course Information Tooltips**: Pop-up tooltips show detailed course information including credits and requirements
- **Multi-Program Support**: Easily switch between different degree programs
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Color-Coded Courses**: Visual indicators help identify course relationships at a glance
- **Total Credit Tracking**: Semester and total program credit hours displayed automatically

## Technology Stack

- **React 18** with TypeScript
- **Vite** - Lightning-fast build tool
- **CSS Modules** - Scoped styling for components
- **Modern CSS** - Responsive design with Grid and Flexbox

## Getting Started

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd curriculum
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The compiled application will be in the `dist/` directory, ready for deployment.

## Project Structure

```
src/
├── components/
│   ├── CourseCard.tsx              # Individual course display component
│   ├── CourseCard.module.css       # Course card styling
│   ├── SemesterGrid.tsx            # Main flowsheet grid component
│   ├── SemesterGrid.module.css     # Grid styling
│   ├── ProgramSelector.tsx         # Program selection dropdown
│   └── ProgramSelector.module.css  # Selector styling
├── data/
│   └── samplePrograms.ts           # Degree program data
├── types.ts                        # TypeScript type definitions
├── App.tsx                         # Main application component
├── App.css                         # App-level styling
├── index.css                       # Global styles
└── main.tsx                        # React entry point
```

## Adding New Degree Programs

To add a new degree program, edit `src/data/samplePrograms.ts`:

1. Create a new `DegreeProgram` object following the structure of `softwareEngineeringProgram`
2. Add courses with proper prerequisite/corequisite relationships
3. Export the program in the `allPrograms` array

## Customization

### Colors and Branding

Edit the CSS files to customize colors:
- `src/App.css` - Main navbar gradient
- `src/components/CourseCard.module.css` - Course card colors
- `src/index.css` - Global CSS variables and colors

### Course Prerequisites

Specify course relationships in the course data:
```typescript
{
  course: {
    code: 'COP 2100',
    name: 'Programming II',
    credits: 3,
    prereqs: ['COP 1000'],
    coreqs: ['MTH 141'],
    postreqs: ['COP 2800']
  },
  semester: 2,
  year: 1,
  season: 'Spring'
}
```

## Deployment

### Deploy to Static Hosting

1. Build the project: `npm run build`
2. Upload the `dist/` folder to your hosting service
3. Ensure your server serves `index.html` for all routes

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Acknowledgments

This flowsheet tool was inspired by and adapted from work originally developed by the **University at Buffalo School of Engineering and Applied Sciences**. We gratefully acknowledge their willingness to share this code with FGCU.

## Support

For issues or questions about the flowsheet:
1. Contact your academic advisor
2. Visit the FGCU Engineering website
3. Email the Software Engineering department

---

**Version**: 1.0.0  
**Last Updated**: 2024
