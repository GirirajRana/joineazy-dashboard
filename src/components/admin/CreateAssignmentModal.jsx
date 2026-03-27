import { useState } from "react";

export default function CreateAssignmentModal({ isOpen, onClose, onAdd }) {
  const [title, setTitle] = useState("");
  const [driveLink, setDriveLink] = useState("");

  if (!isOpen) return null;

  const handleSubmit = () => {
    if (!title || !driveLink) return;

    onAdd({ title, driveLink });
    setTitle("");
    setDriveLink("");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">
      <div className="bg-white p-6 rounded-xl w-full max-w-md shadow-lg">
        <h2 className="text-lg font-bold mb-4">Create Assignment</h2>

        <input
          className="border p-2 rounded w-full mb-3"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          className="border p-2 rounded w-full mb-4"
          placeholder="Drive Link"
          value={driveLink}
          onChange={(e) => setDriveLink(e.target.value)}
        />

        <div className="flex gap-2">
          <button
            onClick={handleSubmit}
            className="bg-indigo-600 text-white px-4 py-2 rounded"
          >
            Add
          </button>

          <button
            onClick={onClose}
            className="bg-gray-300 px-4 py-2 rounded"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}