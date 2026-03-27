import { useState } from "react";
import SubmitModal from "./SubmitModal";

export default function AssignmentCard({ assignment, submitted, onSubmit }) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border p-5 flex flex-col justify-between">
        
        {/* 🔹 Header */}
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-lg font-semibold text-gray-800">
            {assignment.title}
          </h3>

          <span
            className={`text-xs px-3 py-1 rounded-full font-medium ${
              submitted
                ? "bg-green-100 text-green-700"
                : "bg-yellow-100 text-yellow-700"
            }`}
          >
            {submitted ? "Submitted" : "Pending"}
          </span>
        </div>

        {/* 🔹 Description */}
        <p className="text-sm text-gray-500 mb-2">
          {assignment.description}
        </p>

        {/* 🔹 Due Date */}
        <p className="text-xs text-gray-400 mb-3">
          Due: {assignment.dueDate}
        </p>

        {/* 🔹 Drive Link */}
        <a
          href={assignment.driveLink}
          target="_blank"
          rel="noreferrer"
          className="text-indigo-600 text-sm font-medium hover:underline mb-4"
        >
          Open Assignment →
        </a>

        {/* 🔹 Action */}
        {!submitted && (
          <button
            onClick={() => setOpenModal(true)}
            className="bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition font-medium"
          >
            Mark as Submitted
          </button>
        )}

        {/* 🔹 Optional success text */}
        {submitted && (
          <p className="text-sm text-green-600 font-medium text-center mt-2">
            ✔ Assignment submitted
          </p>
        )}
      </div>

      {/* 🔹 Modal */}
      <SubmitModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        onConfirm={() => {
          onSubmit();
          setOpenModal(false);
        }}
      />
    </>
  );
}