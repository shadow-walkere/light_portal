import React, { useState } from "react";
import { ShieldCheck, AlertTriangle, Download, CheckCircle } from "lucide-react";

function Discipline() {
  const [acknowledged, setAcknowledged] = useState(false);

  const rules = [
    "Respect all staff, students, and school property.",
    "Punctuality is mandatory for all classes and activities.",
    "Full school uniform must be worn at all times on campus.",
    "Use of mobile phones during lessons is strictly prohibited.",
    "Bullying, harassment, or any form of violence is not tolerated.",
    "Maintain cleanliness in classrooms, dorms, and common areas.",
    "Academic honesty must be upheld in all assignments and exams.",
    "Report any misconduct to the teacher or discipline master."
  ];

  return (
    <div className="max-w-5xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg md:ml-4 md:mr-4">
      <div className="flex items-center gap-4 mb-6">
        <ShieldCheck size={32} className="text-blue-600" />
        <h1 className="text-3xl font-bold text-blue-700">Student Code of Conduct</h1>
      </div>

      <p className="text-gray-600 mb-6">
        At Light Academy, we believe that discipline is the cornerstone of academic and personal growth.
        All students are expected to follow the rules below to maintain a respectful and safe learning environment.
      </p>

      <ul className="list-disc pl-6 space-y-4 text-gray-800">
        {rules.map((rule, index) => (
          <li key={index} className="text-lg leading-relaxed">{rule}</li>
        ))}
      </ul>

      <div className="mt-10 flex items-center bg-yellow-100 text-yellow-800 px-4 py-3 rounded-md shadow-inner">
        <AlertTriangle className="mr-3" />
        <p className="text-sm">
          Repeated violations of school rules may result in disciplinary action as outlined in the student handbook.
        </p>
      </div>

      {/* Acknowledgement + Download */}
      <div className="mt-10 border-t pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <label className="flex items-center space-x-2 text-gray-700">
          <input
            type="checkbox"
            checked={acknowledged}
            onChange={() => setAcknowledged(!acknowledged)}
            className="w-5 h-5 text-blue-600"
          />
          <span>I have read and agree to follow the above rules.</span>
        </label>

        <a
          href="/docs/rules.pdf" // Replace with your actual PDF file path
          download
          className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          <Download className="mr-2" size={20} />
          Download Rules (PDF)
        </a>
      </div>

      {acknowledged && (
        <div className="mt-4 text-green-600 flex items-center gap-2">
          <CheckCircle size={20} />
          <span>Thanks for acknowledging the rules!</span>
        </div>
      )}
    </div>
  );
}

export default Discipline;
