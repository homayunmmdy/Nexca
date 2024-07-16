import React from 'react';
import { useRouter } from 'next/navigation';
import useCheckLogin from '@/app/hooks/useCheckLogin';

const LogoutButton = () => {
  const router = useRouter();

  useCheckLogin();

  const handleLogout = () => {
    localStorage.removeItem('authenticated');
    router.push('/');
  }

  return (
    <button className='btn btn-error m-3' onClick={handleLogout}>Logout</button>
  );
}

export default LogoutButton;