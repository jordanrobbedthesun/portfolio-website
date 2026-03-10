import { useState } from 'react'
import type { DegreeProgram } from './types'
import { SemesterGrid } from './components/SemesterGrid'
import { ProgramSelector } from './components/ProgramSelector'
import { allPrograms } from './data/samplePrograms'
import './App.css'

function App() {
  const [selectedMajorCode, setSelectedMajorCode] = useState<string>(allPrograms[0].code)
  const [selectedAcademicYear, setSelectedAcademicYear] = useState<string>(allPrograms[0].effectiveAcademicYear)

  const majorPrograms = allPrograms.filter(program => program.code === selectedMajorCode)
  const selectedProgram: DegreeProgram =
    majorPrograms.find(program => program.effectiveAcademicYear === selectedAcademicYear) ?? majorPrograms[0] ?? allPrograms[0]

  const handleSelectMajor = (majorCode: string) => {
    setSelectedMajorCode(majorCode)
    const programsForMajor = allPrograms.filter(program => program.code === majorCode)
    if (programsForMajor.length > 0) {
      setSelectedAcademicYear(programsForMajor[0].effectiveAcademicYear)
    }
  }

  const handleSelectAcademicYear = (academicYear: string) => {
    setSelectedAcademicYear(academicYear)
  }

  return (
    <div className="app">
      <div className="navbar">
        <div className="navbar-content">
          <h1 className="navbar-title">FGCU Degree Flowsheet Tool</h1>
          <p className="navbar-subtitle">Visualize Your Path to Graduation</p>
        </div>
      </div>

      {allPrograms.length > 1 && (
        <ProgramSelector
          programs={allPrograms}
          selectedProgram={selectedProgram}
          selectedMajorCode={selectedMajorCode}
          selectedAcademicYear={selectedAcademicYear}
          onSelectMajor={handleSelectMajor}
          onSelectAcademicYear={handleSelectAcademicYear}
        />
      )}

      <SemesterGrid program={selectedProgram} />
    </div>
  )
}

export default App
