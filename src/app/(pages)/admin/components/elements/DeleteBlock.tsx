'use client'
import { useState, useEffect } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { useRouter } from "next/navigation";
import { Button } from "@/components";

//@ts-ignore
const DeleteBlock = ({ path, id }) => {
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const router = useRouter();

  // Handle modal auto close after a specific time (e.g., 10 seconds)
  useEffect(() => {
    //@ts-ignore
    let timer;
    //@ts-ignore
    if (isConfirmOpen) {
      timer = setTimeout(() => {
        setIsConfirmOpen(false);
      }, 10000); // Change this duration as needed
    }
    //@ts-ignore
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
      <Button title={<MdDeleteOutline />} color="btn-error"
      style="me-2 mb-2"
      type="button"
      onClick={() => setIsConfirmOpen(true)}
      />

      {isConfirmOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto bg-gray-400 bg-opacity-75 p-4 md:p-8">
          <div className="w-full max-w-sm mx-auto bg-white rounded-lg shadow-md">
            <div className="flex justify-between items-center p-5 border-b border-gray-200">
              <h5 className="text-xl font-medium text-gray-800">Delete</h5>
              <Button title="&times;" color="btn-error" type="button" onClick={() => setIsConfirmOpen(false)}/>
            </div>
            <div className="p-3 text-gray-700">
              Are you sure you want to delete this item?
            </div>
            <div className="flex justify-end items-center p-3">
              <Button title="Cancel" type="button" color="btn-ghost" style="mr-2" onClick={() => setIsConfirmOpen(false)}/>
              <Button title="Delete" type="button" color="btn-error" onClick={handleDelete}/>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DeleteBlock;