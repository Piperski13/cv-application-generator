// Buttons.js
import { FaCheck, FaTrash, FaEdit } from "react-icons/fa";
import { HiPlus } from "react-icons/hi";

export const SubmitButton = () => (
  <div className="flex justify-center items-center mt-3">
    <button
      type="submit"
      className="bg-green-500 text-white p-4 mb-1 rounded-2xl hover:bg-green-600"
    >
      <FaCheck />
    </button>
  </div>
);

export const AddButton = ({ onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className="bg-blue-500 text-white p-4 mb-1 rounded-2xl hover:bg-blue-600"
  >
    <HiPlus />
  </button>
);

export const EditButton = ({ onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className="bg-indigo-500 text-white p-4 my-2 mr-12 mb-1 max-h-12 rounded-2xl hover:bg-blue-600"
  >
    <FaEdit />
  </button>
);

export const DeleteButton = ({ onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className="bg-red-500 text-white p-2 rounded-2xl hover:bg-red-600 w-8"
  >
    <FaTrash />
  </button>
);
