import SiteConfig from '@/app/config/site'
import Link from 'next/link'
import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";


const Footer = () => {
    return (
        <>
            <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
                <nav className="grid grid-flow-col gap-4">
                    <Link className="link link-hover" href="/contacts">Contact</Link>
                    <Link className="link link-hover" href="/privacy_policy">Privacy Policy</Link>
                    <Link className="link link-hover" href="/Admin">Admin</Link>
                </nav>
            <nav>
                    <div className="grid grid-flow-col gap-4">
                        <Link href="https://github.com/homayunmmdy/Nexca" className="ease-in-out delay-100 transition-colors hover:text-indigo-600"><FaGithub size={25} /></Link>
                        <Link title="Linkedin" href='www.linkedin.com/in/homayunmmdy' className="ease-in-out delay-100 transition-colors hover:text-indigo-600" ><FaLinkedinIn size={25} /></Link>
                    </div>
                </nav>
                <aside>
                    <p>Copyright@{new Date().getFullYear()} All Right Reserved  by <Link href="/">{SiteConfig.name}</Link></p>
                </aside>
            </footer>
        </>
    )
}

export default Footer