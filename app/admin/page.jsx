'use client'
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation';
import Stats from '../components/Stats';
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
      <button className='btn btn-error m-3' onClick={handleLogout}>خروج</button>
      <Stats />
    </div>
  )
}

export default Admin
