import React, { useState } from "react";

function AcademicInfo() {
  const [performanceData] = useState({
    overallGrade: "B+",
    meanScore: "73.5",
    term: "Term 2",
    year: "2025",
    classPosition: "5th out of 40",
    comments: "Great improvement in sciences. Maintain consistency.",
  });

  const [previousResults] = useState([
    {
      term: "Term 1",
      year: "2024",
      overallGrade: "B",
      meanScore: "70.0",
      classPosition: "6th out of 40",
      comments: "Needs improvement in mathematics.",
    },
    {
      term: "Term 2",
      year: "2024",
      overallGrade: "B+",
      meanScore: "73.5",
      classPosition: "5th out of 40",
      comments: "Great improvement in sciences. Maintain consistency.",
    },
  ]);

  return (
    <div className="max-w-4xl w-full mx-auto bg-white shadow-md rounded-xl p-6 mt-10 md:ml-20 md:mr-20">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-blue-800 flex items-center gap-2">
          <i className="fas fa-chart-line text-blue-600" />
          Results & Performance
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Overall Grade</label>
          <p className="mt-1 text-gray-800">{performanceData.overallGrade}</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Mean Score</label>
          <p className="mt-1 text-gray-800">{performanceData.meanScore}</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Term</label>
          <p className="mt-1 text-gray-800">{performanceData.term}</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Year</label>
          <p className="mt-1 text-gray-800">{performanceData.year}</p>
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700">Class Position</label>
          <p className="mt-1 text-gray-800">{performanceData.classPosition}</p>
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700">Comments</label>
          <p className="mt-1 text-gray-800 whitespace-pre-line">{performanceData.comments}</p>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-xl font-semibold text-gray-700">Previous Results</h3>
        <table className="w-full mt-4 table-auto border-collapse">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b">Term</th>
              <th className="px-4 py-2 border-b">Year</th>
              <th className="px-4 py-2 border-b">Overall Grade</th>
              <th className="px-4 py-2 border-b">Mean Score</th>
              <th className="px-4 py-2 border-b">Class Position</th>
              <th className="px-4 py-2 border-b">Comments</th>
            </tr>
          </thead>
          <tbody>
            {previousResults.map((result, index) => (
              <tr key={index}>
                <td className="px-4 py-2 border-b">{result.term}</td>
                <td className="px-4 py-2 border-b">{result.year}</td>
                <td className="px-4 py-2 border-b">{result.overallGrade}</td>
                <td className="px-4 py-2 border-b">{result.meanScore}</td>
                <td className="px-4 py-2 border-b">{result.classPosition}</td>
                <td className="px-4 py-2 border-b">{result.comments}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AcademicInfo;
