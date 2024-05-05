'use client'
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation';
const Admin = () => {
  const router = useRouter()
  useEffect(() => {
    const isAuthenticated = localStorage.getItem("authenticated");
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('checkLogin');
    router.push('/')
  }
  return (
    <div>
      <button onClick={handleLogout}>خروج</button>
    </div>
  )
}

export default Admin
