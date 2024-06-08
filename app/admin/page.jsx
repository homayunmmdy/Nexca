'use client'
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation';
import Stats from '../components/Stats';
import { RecentPosts } from '../components/sections';
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
      <button className='btn btn-error m-3' onClick={handleLogout}>Logout</button>
      <Stats />
      <RecentPosts />
    </div>
  )
}

export default Admin
