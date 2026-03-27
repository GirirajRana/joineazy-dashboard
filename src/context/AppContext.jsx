import { createContext, useContext, useState, useEffect } from "react";
import { users, assignments, initialSubmissions } from "../data/mockData";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  const [assignmentList, setAssignmentList] = useState(assignments);

  const [submissions, setSubmissions] = useState(() => {
    const saved = localStorage.getItem("submissions");
    return saved ? JSON.parse(saved) : initialSubmissions;
  });

  // 🔹 Save submissions to localStorage
  useEffect(() => {
    localStorage.setItem("submissions", JSON.stringify(submissions));
  }, [submissions]);

  // 🔐 Login
  const login = (id) => {
    const user = users.find((u) => u.id === id);
    setCurrentUser(user);
  };

  // 🔓 Logout
  const logout = () => setCurrentUser(null);

  // ✅ Student submits assignment
  const submitAssignment = (studentId, assignmentId) => {
    setSubmissions((prev) =>
      prev.map((s) =>
        s.studentId === studentId && s.assignmentId === assignmentId
          ? { ...s, submitted: true }
          : s
      )
    );
  };

  // ✅ Admin adds assignment
  const addAssignment = (newAssignment) => {
    setAssignmentList((prevAssignments) => {
      const newId = prevAssignments.length + 1;

      const assignment = {
        ...newAssignment,
        id: newId,
        createdBy: currentUser?.id,
      };

      // Create submissions for all students
      const studentUsers = users.filter((u) => u.role === "student");

      const newSubmissions = studentUsers.map((u) => ({
        studentId: u.id,
        assignmentId: newId,
        submitted: false,
      }));

      // Update submissions
      setSubmissions((prevSubs) => [...prevSubs, ...newSubmissions]);

      return [...prevAssignments, assignment];
    });
  };

  return (
    <AppContext.Provider
      value={{
        currentUser,
        users,
        assignmentList,
        submissions,
        login,
        logout,
        submitAssignment,
        addAssignment,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

// 🔹 Custom Hook
export function useApp() {
  return useContext(AppContext);
}