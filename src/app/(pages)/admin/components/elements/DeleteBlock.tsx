'use client'
import { useState, useEffect } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { useRouter } from "next/navigation";
import { Button } from "@/components";
import React from 'react'

interface Props {
  path: string;
  id : string | number;
}

const DeleteBlock: React.FC<Props> = ({ path, id }: Props) => {
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const router = useRouter();

  // Handle modal auto close after a specific time (e.g., 10 seconds)
  useEffect(() => {
    let timer: string | number | NodeJS.Timeout | undefined;
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
      <Button color="btn-error"
      style="me-2 mb-2"
      type="button"
      onClick={() => setIsConfirmOpen(true)}
      ><MdDeleteOutline /></Button>

      {isConfirmOpen && (
        <div className="fixed inset-0 z-10 mt-[120px] overflow-y-auto bg-opacity-75 p-4 md:p-8">
          <div className="mx-auto w-full max-w-sm rounded-lg shadow-md">
            <div className="flex items-center justify-between border-b p-5">
              <h5 className="text-xl font-medium">Delete</h5>
              <Button  color="btn-error" type="button" onClick={() => setIsConfirmOpen(false)}>"&times;"</Button>
            </div>
            <div className="p-3">
              Are you sure you want to delete this item?
            </div>
            <div className="flex items-center justify-end p-3">
              <Button  type="button" color="btn-primary" style="mr-2" onClick={() => setIsConfirmOpen(false)}>Cancel</Button>
              <Button type="button" color="btn-error" onClick={handleDelete}>Delete</Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DeleteBlock;