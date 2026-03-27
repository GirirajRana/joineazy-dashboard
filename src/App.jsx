import { useApp } from "./context/AppContext";
import LoginPage from "./components/auth/LoginPage";
import StudentDashboard from "./pages/StudentDashboard";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  const { currentUser } = useApp();

  // 🔐 If not logged in → show login
  if (!currentUser) return <LoginPage />;

  // 👨‍🎓 Student view
  if (currentUser.role === "student") return <StudentDashboard />;

  // 👨‍🏫 Admin view
  if (currentUser.role === "admin") return <AdminDashboard />;

  return null;
}

export default App;