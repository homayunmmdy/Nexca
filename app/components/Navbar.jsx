"use client"
import React from 'react'
import Link from "next/link";
import SiteConfig from '@/app/config/site';
import { IoSearch } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const pathname = usePathname();
    return (
        <>
            <header className="flex-wrap justify-center sm:flex-nowrap navbar bg-neutral-900 md:px-12 py-3 mb-8">
                <div className=" sm:navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <RxHamburgerMenu color='#fff' size={22} />
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 gap-5">
                            {SiteConfig.navbar.map(item => (
                                <li key={item.id}>
                                    {pathname === item.href ? <Link href={item.href} className='shadow-xl border border-neutral-900'>{item.name}</Link> :
                                        <Link href={item.href} className='shadow-xl border border-neutral-100'>{item.name}</Link>}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <Link href="/" className="btn btn-ghost text-xl text-red-600">{SiteConfig.name}</Link>
                </div>
                <div className="navbar-center hidden lg:flex px-7">
                    <ul className="menu menu-horizontal px-4 bg-neutral-500 rounded-2xl">
                        {SiteConfig.navbar.map(item => (
                            <>
                                {pathname === item.href ? <li key={item.id} className="hover:bg-neutral-100 rounded-2xl"> <Link className='text-red-600 font-extrabold' href={item.href}>{item.name}</Link> </li> : <li key={item.id} className="hover:bg-pageColor rounded-2xl"><Link className='text-neutral-200 font-extrabold' href={item.href}>{item.name}</Link></li>}
                            </>
                        ))}
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