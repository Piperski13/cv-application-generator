// Buttons.js
import { FaCheck, FaTrash } from "react-icons/fa";
import { HiPlus } from "react-icons/hi";

export const SubmitButton = () => (
  <button
    type="submit"
    className="bg-green-500 text-white p-2 rounded-2xl hover:bg-green-600"
  >
    <FaCheck />
  </button>
);

export const AddButton = ({ onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className="bg-blue-500 text-white p-2 rounded-2xl hover:bg-blue-600"
  >
    <HiPlus />
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
