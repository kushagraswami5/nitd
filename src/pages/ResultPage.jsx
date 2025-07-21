import React, { useState } from "react";

export default function ResultPage() {
  const [activeSemester, setActiveSemester] = useState(null);

  const resultSummary = [
    { semester: "First Semester", credit: 20, sgpa: 5.7, cgpa: 5.7 },
    { semester: "Second Semester", credit: 20, sgpa: 5.0, cgpa: 5.35 },
    { semester: "Third Semester", credit: 7, sgpa: 1.75, cgpa: 4.15 },
    { semester: "Fourth Semester", credit: 13, sgpa: 3.25, cgpa: 3.93 },
    { semester: "Fifth Semester", credit: 20, sgpa: 6.0, cgpa: 4.6 },
    { semester: "Sixth Semester", credit: 20, sgpa: 7.2, cgpa: 5.0 },
  ];

  const detailedResults = {
    "First Semester": [
      { code: "CELB 102", name: "Fundamentals of Engineering Mechanics", credit: 3, grade: "C" },
      { code: "CELB 103", name: "Environmental Studies", credit: 3, grade: "D" },
      { code: "CELB 151", name: "Elements of Civil Engineering", credit: 2, grade: "D" },
      { code: "CEPB 121", name: "Nature and Care", credit: 1, grade: "B" },
      { code: "HMPB 102", name: "Communication Skills", credit: 1, grade: "C" },
      { code: "CYBB 100", name: "Engineering Chemistry", credit: 3, grade: "D" },
      { code: "ECBB 101", name: "Basics of Electronics and Electrical Engineering", credit: 4, grade: "B" },
      { code: "MEBB 119", name: "Engineering Graphics and AutoCAD", credit: 3, grade: "D" },
    ],
    "Second Semester": [
      { code: "CELB 106", name: "Civil Engg Materials & Construction Techniques", credit: 3, grade: "D" },
      { code: "MALB 159", name: "Mathematics for Engineers-I", credit: 3, grade: "D" },
      { code: "CEPB 171", name: "Site Visit Report", credit: 1, grade: "D" },
      { code: "EAPB 101", name: "Extra Academic Activity", credit: 0, grade: "U" },
      { code: "CEBB 112", name: "Mechanics of Solids", credit: 4, grade: "D" },
      { code: "HMBB 101", name: "Theory & Practices of Human Ethics", credit: 3, grade: "D" },
      { code: "MEBB 163", name: "Engineering Workshop Practice", credit: 2, grade: "D" },
      { code: "PHBB 111", name: "Engineering Physics", credit: 4, grade: "D" },
    ],
    "Third Semester": [
      { code: "CELB 201", name: "Structural Analysis-I", credit: 0, grade: "F" },
      { code: "CEBB 211", name: "Fluid Mechanics", credit: 0, grade: "F" },
      { code: "CEBB 212", name: "Concrete Technology", credit: 0, grade: "F" },
      { code: "CEBB 213", name: "Geotechnical Engineering-I", credit: 4, grade: "D" },
      { code: "CEBB 214", name: "Building Planning, Drawing & Construction", credit: 3, grade: "D" },
      { code: "CSBB 249", name: "Computer Programming", credit: 0, grade: "F" },
    ],
    "Fourth Semester": [
      { code: "CEBB 262", name: "Design of Concrete Structures", credit: 0, grade: "F" },
      { code: "CEBB 264", name: "Hydrology and Irrigation Engineering", credit: 3, grade: "D" },
      { code: "CELB 251", name: "Estimation Costing and Valuation", credit: 2, grade: "D" },
      { code: "CEBB 261", name: "Transportation Engineering-I", credit: 4, grade: "D" },
      { code: "CEBB 263", name: "Environmental Engineering-I", credit: 4, grade: "D" },
      { code: "CEBB 265", name: "Surveying", credit: 0, grade: "F" },
    ],
   "Fifth Semester": [
      { code: "CEL301", name: "Analysis of Indeterminate Structures", credit: 4, grade: "C" },
      { code: "CEL302", name: "Liquid and Solid Waste Engineering", credit: 3, grade: "D" },
      { code: "CEL303", name: "Open Channel Flow", credit: 3, grade: "D" },
      { code: "CEL304", name: "Railways and Airport Engineering", credit: 3, grade: "C" },
      { code: "CEB311", name: "Surveying-II", credit: 3, grade: "C" },
      { code: "MAL359", name: "Mathematics for Engineers-II", credit: 3, grade: "D" },
      { code: "CEP321", name: "Summer Training-I", credit: 1, grade: "B" }, // P for Pass
],
   "Sixth Semester": [
      { code: "CEL351", name: "Design of Steel Structures", credit: 3, grade: "B" },
      { code: "CEL352", name: "Design of Advanced Concrete Structures", credit: 3, grade: "C" },
      { code: "CEL353", name: "Foundation Engineering", credit: 3, grade: "C" },
      { code: "CEL354", name: "Construction Technology and Project Management", credit: 3, grade: "B" },
      { code: "XXXXXX", name: "Open Elective-I", credit: 3, grade: "C" },
      { code: "HML359", name: "Economics for Engineers", credit: 3, grade: "B" },
      { code: "CEP371", name: "Minor Project", credit: 2, grade: "B" },
],

  };

  return (
    <div className="min-h-screen bg-blue-50 p-4">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-md overflow-hidden">
        {/* Header */}
        <div className="bg-blue-600 text-white px-4 py-3 flex flex-col gap-2 sm:flex-row sm:justify-between text-sm">
          <div>Name: <strong>NIKHIL VISWAS</strong></div>
          <div>Enrollment: <strong>221320012</strong></div>
          <div>Program: <strong>B.Tech</strong></div>
          <div>Branch: <strong>Civil Engineering</strong></div>
          <div className="flex gap-4">
            <a href="#" className="underline">Home</a>
            <a href="#" className="underline">Logout</a>
          </div>
        </div>

        {/* Result Summary */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm sm:text-base text-left border-collapse">
            <thead className="bg-blue-700 text-white">
              <tr>
                <th className="p-2">Examination</th>
                <th className="p-2">Earned Credit</th>
                <th className="p-2">SGPA</th>
                <th className="p-2">CGPA</th>
                <th className="p-2">Result Status</th>
              </tr>
            </thead>
            <tbody>
              {resultSummary.map((sem, idx) => (
                <tr
                  key={idx}
                  className={`cursor-pointer hover:bg-blue-200 ${idx % 2 === 0 ? "bg-blue-100" : "bg-blue-50"}`}
                  onClick={() => setActiveSemester(sem.semester)}
                >
                  <td className="p-2 text-blue-700 font-semibold underline">{sem.semester.toUpperCase()}</td>
                  <td className="p-2">{sem.credit}</td>
                  <td className="p-2">{sem.sgpa}</td>
                  <td className="p-2">{sem.cgpa}</td>
                  <td className="p-2 text-blue-600">Provisional</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Notes */}
        <div className="text-xs text-gray-600 p-4">
          <p>NOTE 1: Please contact the Examination Department in case of any dispute or mismatch in data.</p>
          <p>NOTE 2: This is a computer-generated report. It should not be used for official purposes.</p>
        </div>

        {/* Detailed Result */}
        {activeSemester && detailedResults[activeSemester] && (
          <div className="mt-6 px-4 pb-6">
            <div className="text-blue-800 font-bold mb-2">RESULT SHEET</div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm sm:text-base text-left border-collapse">
                <thead className="bg-blue-700 text-white">
                  <tr>
                    <th className="p-2">Subject Code</th>
                    <th className="p-2">Subject Name</th>
                    <th className="p-2">Earned Credit</th>
                    <th className="p-2">Grade</th>
                  </tr>
                </thead>
                <tbody>
                  {detailedResults[activeSemester].map((subject, index) => (
                    <tr key={index} className={`${index % 2 === 0 ? "bg-blue-100" : "bg-blue-50"}`}>
                      <td className="p-2 font-semibold">{subject.code}</td>
                      <td className="p-2 font-semibold">{subject.name}</td>
                      <td className="p-2">{subject.credit}</td>
                      <td className="p-2">{subject.grade}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 text-sm font-bold text-right text-gray-700">
              RESULT SHEET FOR - {activeSemester.toUpperCase()} &nbsp;&nbsp;
              EARNED CREDIT - {resultSummary.find(r => r.semester === activeSemester).credit} &nbsp;&nbsp;
              SGPA - {resultSummary.find(r => r.semester === activeSemester).sgpa}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
