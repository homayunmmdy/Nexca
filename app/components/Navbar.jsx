"use client"
import React, { useEffect, useState } from 'react'
import Link from "next/link";
import SiteConfig from '@/app/config/site';
import { IoSearch } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { usePathname } from "next/navigation";
import axios from "axios"

const Navbar = () => {
    const [data, setData] = useState();
    const pathname = usePathname();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`/api/Services`);
                setData(response.data.services);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);
    return (
        <>
            <header className="flex-wrap justify-center sm:flex-nowrap navbar bg-neutral-900 md:px-12 py-3 mb-8">
                <div className=" sm:navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <RxHamburgerMenu color='#fff' size={22} />
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[99] p-2 shadow bg-base-100 rounded-box w-52 gap-5">
                            {pathname === "/" ?
                                <li><Link className='shadow-xl border border-neutral-900' href="/">خانه</Link></li> :
                                <li><Link className='shadow-xl border border-neutral-100' href="/">خانه</Link></li>}
                            {data?.map(item => (
                                <li key={item.id}>
                                    {pathname === `/services/${item.secid}` ? <Link href={`/services/${item.secid}`} className='shadow-xl border border-neutral-900'>{item.name}</Link> :
                                        <Link href={`/services/${item.secid}`} className='shadow-xl border border-neutral-100'>{item.name}</Link>}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <Link href="/" className="btn btn-ghost text-xl text-red-600">{SiteConfig.name}</Link>
                </div>
                <div className="navbar-center hidden lg:flex px-7">
                    <ul className="menu menu-horizontal px-4 bg-neutral-500 rounded-2xl">
                        {pathname === "/" ?
                            <li className="hover:bg-neutral-100 rounded-2xl"><Link className='text-red-600 font-extrabold' href="/">خانه</Link></li> :
                            <li className="hover:bg-red-600 rounded-2xl"><Link className='text-neutral-200 font-extrabold' href="/">خانه</Link></li>}
                        {data?.map(item => {
                            return (
                                <>
                                    {pathname == `/services/${item.secid}` ? <li key={item._id} className="hover:bg-neutral-100 rounded-2xl"> <Link className='text-red-600 font-extrabold' href={`/services/${item.secid}`}>{item.name}</Link> </li> : <li key={item._id} className="hover:bg-red-600 rounded-2xl"><Link className='text-neutral-200 font-extrabold' href={`/services/${item.secid}`}>{item.name}</Link></li>}
                                </>
                            )
                        })}
                    </ul>
                </div>
                <div className=" sm:navbar-end">
                    <label className="input input-bordered flex items-center gap-2">
                        <input type="text" className="grow" placeholder="جستجو" />
                        <IoSearch size={22} color='#E51E1E' />
                    </label>
                </div>
            </header>
        </>
    )
}

export default Navbar