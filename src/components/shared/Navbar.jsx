import { useApp } from "../../context/AppContext";

export default function Navbar() {
  const { currentUser, logout } = useApp();

  return (
    <div className="bg-white shadow">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        <h1 className="text-xl font-bold text-indigo-600">
          Joineazy Dashboard
        </h1>

        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-600">
            {currentUser?.name} ({currentUser?.role})
          </span>

          <button
            onClick={logout}
            className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition text-sm"
          >
            Logout
          </button>
        </div>

      </div>
    </div>
  );
}