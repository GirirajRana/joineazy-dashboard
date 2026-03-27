import Navbar from "../components/shared/Navbar";
import { useApp } from "../context/AppContext";
import AssignmentCard from "../components/student/AssignmentCard";

export default function StudentDashboard() {
  const { currentUser, assignmentList, submissions, submitAssignment } = useApp();

  const total = assignmentList.length;

  const submittedCount = submissions.filter(
    (s) => s.studentId === currentUser.id && s.submitted
  ).length;

  const progress = total === 0 ? 0 : (submittedCount / total) * 100;

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="p-6 max-w-6xl mx-auto">
        
        {/* 🔹 Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold">
            Welcome, {currentUser.name}
          </h1>
          <p className="text-gray-500 text-sm">
            Track your assignments and submissions
          </p>
        </div>

        {/* 🔹 Progress Card */}
        <div className="bg-white p-5 rounded-2xl shadow mb-6 border">
          <div className="flex justify-between items-center mb-2">
            <p className="text-sm font-medium">Your Progress</p>
            <span className="text-xs text-gray-500">
              {submittedCount}/{total}
            </span>
          </div>

          <div className="w-full bg-gray-200 h-3 rounded">
            <div
              className="bg-indigo-600 h-3 rounded transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* 🔹 Empty State */}
        {assignmentList.length === 0 && (
          <div className="bg-white p-6 rounded-xl shadow text-center text-gray-500">
            No assignments available
          </div>
        )}

        {/* 🔹 Cards Grid */}
        {assignmentList.length > 0 && (
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {assignmentList.map((assignment) => {
              const submission = submissions.find(
                (s) =>
                  s.studentId === currentUser.id &&
                  s.assignmentId === assignment.id
              );

              return (
                <AssignmentCard
                  key={assignment.id}
                  assignment={assignment}
                  submitted={submission?.submitted}
                  onSubmit={() =>
                    submitAssignment(currentUser.id, assignment.id)
                  }
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}