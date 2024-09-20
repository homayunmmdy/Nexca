'use client'
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { AUTH_KEY } from '@/config/Constants';

const useCheckLogin = () => {
  const router = useRouter();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem(AUTH_KEY);
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, [router]);
};

export default useCheckLogin;