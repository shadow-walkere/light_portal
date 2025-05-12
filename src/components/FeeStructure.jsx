// import React from "react";
// import { FileText, Download } from "lucide-react";

// const FeeStructure = () => {
//   return (
//     <div className="max-w-5xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg md:ml-4 md:mr-4">
//       <div className="flex items-center gap-4 mb-6">
//         <FileText size={32} className="text-blue-600" />
//         <h2 className="text-2xl font-bold text-blue-700">2024 Fee Structure</h2>
//       </div>

//       <p className="text-gray-600 mb-4">
//         Below is the detailed breakdown of fees for the academic year 2024.
//         Please ensure all payments are made to the official school accounts. If
//         the preview doesn't load, you can also download the PDF.
//       </p>

//       <div className="border rounded-lg overflow-hidden shadow-sm">
//         <embed
//           src="/docs/Fee-Stracture-2024-LA-Nairobi-Karen-Ref-03112023-saved-04-11-2023.pdf"
//           type="application/pdf"
//           width="100%"
//           height="600px"
//           className="rounded"
//         />
//       </div>

//       <div className="mt-4 flex justify-end">
//         <a
//           href="/docs/FeeStructure2024.pdf"
//           download
//           className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
//         >
//           <Download className="mr-2" size={20} />
//           Download PDF
//         </a>
//       </div>
//     </div>
//   );
// };

// export default FeeStructure;
import React, { useState } from "react";
import { FileText, Download, ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "When is the fee due?",
    answer: "All term fees should be cleared within the first two weeks of the term to avoid penalties.",
  },
  {
    question: "Can I pay in installments?",
    answer: "Yes, the finance office allows up to two installments per term with prior arrangement.",
  },
  {
    question: "Which payment methods are accepted?",
    answer: "Payments can be made via bank transfer, M-Pesa Paybill, or directly at the finance office.",
  },
];

const FeeStructure = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-5xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg md:ml-4 md:mr-4">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <FileText size={32} className="text-blue-600" />
        <h2 className="text-2xl font-bold text-blue-700">2024 Fee Structure</h2>
      </div>

      {/* Description */}
      <p className="text-gray-600 mb-4">
        Below is the breakdown of fees for the 2024 academic year. Please review the term-wise summary,
        and download the official PDF for more details.
      </p>

      {/* PDF Embed */}
      <div className="border rounded-lg overflow-hidden shadow-sm mb-6">
        <embed
          src="/docs/Fee-Stracture-2024-LA-Nairobi-Karen-Ref-03112023-saved-04-11-2023.pdf"
          type="application/pdf"
          width="100%"
          height="600px"
        />
      </div>

      {/* Download Button */}
      <div className="flex justify-end mb-10">
        <a
          href="/docs/Fee-Stracture-2024-LA-Nairobi-Karen-Ref-03112023-saved-04-11-2023.pdf"
          download
          className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          <Download className="mr-2" size={20} />
          Download PDF
        </a>
      </div>

      {/* Term-wise Fee Summary Table */}
      <div className="mb-10">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">📋 Term-wise Summary</h3>
        <div className="overflow-x-auto">
          <table className="w-full table-auto border border-gray-200 text-sm">
            <thead className="bg-blue-50">
              <tr>
                <th className="border px-4 py-2 text-left">Term</th>
                <th className="border px-4 py-2 text-left">Tuition</th>
                <th className="border px-4 py-2 text-left">Lunch & Activities</th>
                <th className="border px-4 py-2 text-left">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">Term 1</td>
                <td className="border px-4 py-2">KES 25,000</td>
                <td className="border px-4 py-2">KES 5,000</td>
                <td className="border px-4 py-2 font-bold">KES 30,000</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border px-4 py-2">Term 2</td>
                <td className="border px-4 py-2">KES 25,000</td>
                <td className="border px-4 py-2">KES 5,000</td>
                <td className="border px-4 py-2 font-bold">KES 30,000</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Term 3</td>
                <td className="border px-4 py-2">KES 20,000</td>
                <td className="border px-4 py-2">KES 5,000</td>
                <td className="border px-4 py-2 font-bold">KES 25,000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">❓ Frequently Asked Questions</h3>
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div key={index} className="border rounded-md p-4 shadow-sm bg-gray-50">
              <button
                className="w-full flex justify-between items-center font-medium text-gray-700"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                {openIndex === index ? (
                  <ChevronUp size={20} />
                ) : (
                  <ChevronDown size={20} />
                )}
              </button>
              {openIndex === index && (
                <div className="mt-2 text-sm text-gray-600">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeeStructure;
