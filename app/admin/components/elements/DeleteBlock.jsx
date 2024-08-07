'use client'
import { useState, useEffect } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { useRouter } from "next/navigation";

const DeleteBlock = ({ path, id }) => {
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const router = useRouter();

  // Handle modal auto close after a specific time (e.g., 10 seconds)
  useEffect(() => {
    let timer;
    if (isConfirmOpen) {
      timer = setTimeout(() => {
        setIsConfirmOpen(false);
      }, 10000); // Change this duration as needed
    }
    return () => clearTimeout(timer);
  }, [isConfirmOpen]);

  const handleDelete = async () => {
    try {
      const res = await fetch(`/api/${path}/${id}`, {
        method: "DELETE",
      });
      setIsConfirmOpen(false);
      if (res.ok) {
        router.refresh();
      } else {
        console.error("Error deleting item:", res.statusText);
      }
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setIsConfirmOpen(true)}
        className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
      >
        <MdDeleteOutline />
      </button>

      {isConfirmOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto bg-gray-400 bg-opacity-75 p-4 md:p-8">
          <div className="w-full max-w-sm mx-auto bg-white rounded-lg shadow-md">
            <div className="flex justify-between items-center p-5 border-b border-gray-200">
              <h5 className="text-xl font-medium text-gray-800">Delete</h5>
              <button
                type="button"
                onClick={() => setIsConfirmOpen(false)}
                className="focus:outline-none"
              >
                &times;
              </button>
            </div>
            <div className="p-3 text-gray-700">
              Are you sure you want to delete this item?
            </div>
            <div className="flex justify-end items-center p-3">
              <button
                type="button"
                onClick={() => setIsConfirmOpen(false)}
                className="text-gray-500 hover:text-gray-700 focus:outline-none rounded-md border border-gray-200 p-2 mr-2"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleDelete}
                className="text-white bg-red-500 hover:bg-red-600 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DeleteBlock;