'use client'
import { RecentPosts } from '../components/sections';
import useCheckLogin from '../hooks/useCheckLogin';
import { Stats } from './components/sections';

const Admin = () => {
  useCheckLogin()
  return (
    <div>
      <Stats />
      <RecentPosts />
    </div>
  )
}

export default Admin