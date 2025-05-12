import React from "react";
import { BookOpen, Download, FileText, FileArchive, School, Search, NotebookPen, Library as LibraryIcon } from "lucide-react";

const Library = () => {
  return (
    <div className="p-6 md:p-10 bg-gray-50 min-h-screen">
      <div className="flex items-center justify-center gap-3 mb-8">
        <LibraryIcon className="text-blue-700" size={32} />
        <h2 className="text-3xl font-bold text-blue-700">Library Resources</h2>
      </div>

      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
        Discover a wide range of academic materials including textbooks, past papers, notes, and revision kits to support your academic journey. Everything is neatly organized and easily accessible.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <LibraryCard
          icon={<BookOpen className="text-blue-600" size={28} />}
          title="Books"
          description="Browse textbooks and recommended reading materials categorized by subject and class."
          files={120}
        />
        <LibraryCard
          icon={<Download className="text-blue-600" size={28} />}
          title="Download Books"
          description="Access downloadable PDF versions of course books and references."
          files={80}
        />
        <LibraryCard
          icon={<FileText className="text-blue-600" size={28} />}
          title="Notes"
          description="View and download lecture notes, handouts, and other classroom resources."
          files={150}
        />
        <LibraryCard
          icon={<FileArchive className="text-blue-600" size={28} />}
          title="KCSE Revision Material"
          description="Past KCSE papers, marking schemes, and summarized revision booklets."
          files={95}
        />
        <LibraryCard
          icon={<NotebookPen className="text-blue-600" size={28} />}
          title="Assignments & Homework"
          description="Track ongoing assignments and access past homework with teacher comments."
          files={60}
        />
        <LibraryCard
          icon={<Search className="text-blue-600" size={28} />}
          title="Digital Library Search"
          description="Search through thousands of digital learning resources, articles, and archives."
          files={300}
        />
      </div>
    </div>
  );
};

const LibraryCard = ({ icon, title, description, files }) => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition duration-300 flex flex-col justify-between">
      <div className="mb-4">
        <div className="mb-3">{icon}</div>
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600 mt-1">{description}</p>
        <p className="text-sm text-gray-500 mt-2">{files}+ files available</p>
      </div>
      <button className="mt-auto bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition">
        View All
      </button>
    </div>
  );
};

export default Library;
