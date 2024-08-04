"use client"
import { SERVICES_API_URL } from '@/app/config/apiConstants'
import useFetch from '@/app/hooks/useFetch'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const SubNavbar = () => {
  const { data: services } = useFetch(SERVICES_API_URL)
  const pathname = usePathname();

  return (
    <>
      <div className="navbar w-[94%] md:w-[92%] mx-auto ">
        <div className="navbar-start">
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              {services?.map((item) => {
                const href = `/services/${item.secid}`
                return (
                  <li key={item.id} className="mx-1">
                    {pathname == href ? <Link href={href} className="bg-indigo-700 hover:bg-indigo-700 text-white rounded-xl">{item.name}</Link> :
                      <Link className="hover:bg-base-100 border-2 border-base-100 hover:text-indigo-700 hover:border-blue-700 rounded-xl" href={href}>{item.name}</Link>}
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </>

  )
}

export default SubNavbar