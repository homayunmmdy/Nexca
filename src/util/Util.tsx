"use client"
import { MASTER_KEY } from "@/etc/config/Constants";
import { usePathname } from "next/navigation";

export const getParameterId = (sliceCharacter: number) => {
  const pathname = usePathname();
  return pathname.slice(sliceCharacter);
};

export const checkMaster = (): boolean => {
  let master: boolean;
  const isMaster =
    typeof window !== "undefined" ? localStorage.getItem(MASTER_KEY) : false;

  isMaster ? (master = true) : (master = false);

  return master;
};

export const getById = async (baseURL: string, id: string | number) => {
    const API_URL = process.env.API_URL;
  
    try {
      const res = await fetch(`${API_URL}${baseURL}/${id}`, {
        cache: "no-store",
      });
  
      if (!res.ok) {
        throw new Error("Failed to fetch topic");
      }
  
      return res.json();
    } catch (error) {
      console.error(error);
    }
  };