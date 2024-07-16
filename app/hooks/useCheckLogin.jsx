'use client'
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const useCheckLogin = () => {
  const router = useRouter();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("authenticated");
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, [router]);
};

export default useCheckLogin;