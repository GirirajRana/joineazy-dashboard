export default function SubmitModal({ isOpen, onClose, onConfirm }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      
      <div className="bg-white p-6 rounded-xl w-full max-w-sm shadow-lg">
        
        <h2 className="text-lg font-bold mb-3">
          Confirm Submission
        </h2>

        <p className="text-sm text-gray-600 mb-4">
          Are you sure you have submitted this assignment?
        </p>

        <div className="flex gap-2">
          <button
            onClick={onConfirm}
            className="flex-1 bg-green-500 text-white py-2 rounded-lg hover:bg-green-600"
          >
            Yes, Submitted
          </button>

          <button
            onClick={onClose}
            className="flex-1 bg-gray-200 py-2 rounded-lg hover:bg-gray-300"
          >
            Cancel
          </button>
        </div>

      </div>
    </div>
  );
}