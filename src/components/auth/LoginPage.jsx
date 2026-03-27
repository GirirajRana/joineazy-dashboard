import { useState } from "react";
import { useApp } from "../../context/AppContext";
import { users } from "../../data/mockData";

export default function LoginPage() {
  const { login } = useApp();
  const [selectedId, setSelectedId] = useState("");

  const handleLogin = () => {
    if (selectedId) login(Number(selectedId));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-lg p-10 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-indigo-600 mb-2">
          Joineazy
        </h1>
        <p className="text-center text-gray-500 mb-8">
          Assignment & Review Dashboard
        </p>

        <label className="block text-sm font-medium text-gray-700 mb-2">
          Select your account
        </label>
        <select
          className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-6 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          value={selectedId}
          onChange={(e) => setSelectedId(e.target.value)}
        >
          <option value="">-- Choose a user --</option>
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name} ({user.role})
            </option>
          ))}
        </select>

        <button
          onClick={handleLogin}
          disabled={!selectedId}
          className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Login
        </button>
      </div>
    </div>
  );
}