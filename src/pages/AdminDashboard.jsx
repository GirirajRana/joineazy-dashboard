import { useState } from "react";
import Navbar from "../components/shared/Navbar";
import { useApp } from "../context/AppContext";
import CreateAssignmentModal from "../components/admin/CreateAssignmentModal";

export default function AdminDashboard() {
  const { currentUser, assignmentList, users, submissions, addAssignment } =
    useApp();

  const [openModal, setOpenModal] = useState(false);

  const adminAssignments = assignmentList.filter(
    (a) => a.createdBy === currentUser.id || !a.createdBy
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="p-6 max-w-6xl mx-auto">
        
        {/* 🔹 Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold">
              Welcome, {currentUser.name}
            </h1>
            <p className="text-gray-500 text-sm">
              Manage assignments and track submissions
            </p>
          </div>

          <button
            onClick={() => setOpenModal(true)}
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition font-medium shadow"
          >
            + Create Assignment
          </button>
        </div>

        {/* 🔹 Empty State */}
        {adminAssignments.length === 0 && (
          <div className="bg-white p-8 rounded-xl shadow text-center text-gray-500">
            No assignments created yet
          </div>
        )}

        {/* 🔹 Assignment Cards */}
        {adminAssignments.length > 0 && (
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
            {adminAssignments.map((a) => {
              const studentUsers = users.filter(
                (u) => u.role === "student"
              );

              const submittedCount = studentUsers.filter((u) => {
                return submissions.find(
                  (s) =>
                    s.studentId === u.id &&
                    s.assignmentId === a.id &&
                    s.submitted
                );
              }).length;

              const progress =
                studentUsers.length === 0
                  ? 0
                  : (submittedCount / studentUsers.length) * 100;

              return (
                <div
                  key={a.id}
                  className="bg-white p-5 rounded-xl shadow hover:shadow-xl transition-all duration-300 border hover:scale-[1.01]"
                >
                  {/* Title */}
                  <h2 className="font-bold text-lg mb-1">{a.title}</h2>

                  {/* Link */}
                  <a
                    href={a.driveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="text-indigo-500 text-sm underline"
                  >
                    Open Assignment →
                  </a>

                  {/* Progress */}
                  <div className="mt-4">
                    <div className="w-full bg-gray-200 h-3 rounded">
                      <div
                        className="bg-green-500 h-3 rounded transition-all duration-300"
                        style={{ width: `${progress}%` }}
                      ></div>
                    </div>

                    <p className="text-xs mt-1 text-gray-500">
                      {submittedCount}/{studentUsers.length} students submitted
                    </p>
                  </div>

                  {/* Student List */}
                  <div className="mt-4 border-t pt-3">
                    {studentUsers.map((student) => {
                      const sub = submissions.find(
                        (s) =>
                          s.studentId === student.id &&
                          s.assignmentId === a.id
                      );

                      return (
                        <div
                          key={student.id}
                          className="flex justify-between items-center text-sm py-1"
                        >
                          <span>{student.name}</span>

                          <span
                            className={`px-2 py-1 rounded-full text-xs font-medium ${
                              sub?.submitted
                                ? "bg-green-100 text-green-700"
                                : "bg-red-100 text-red-600"
                            }`}
                          >
                            {sub?.submitted ? "Submitted" : "Pending"}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* 🔹 Modal */}
        <CreateAssignmentModal
          isOpen={openModal}
          onClose={() => setOpenModal(false)}
          onAdd={(data) =>
            addAssignment({
              ...data,
              description: "New Assignment",
              dueDate: "2026-04-01",
            })
          }
        />
      </div>
    </div>
  );
}