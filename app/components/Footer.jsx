import React from 'react'
import SiteConfig from '../config/site'

const Footer = () => {
    return (
        <>
            <footer className="footer items-center p-4 bg-neutral-900 text-neutral-content md:px-12">
                <aside className="items-center grid-flow-col">
                    <p>  تمام حقوق مادی و معنوی این سایت متعلق سایت {SiteConfig.name} است و استفاده از مطالب با ذکر منبع بلا مانع است . </p>
                </aside>
                <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                    <p className="text-gray-100">طراحی و تولید :‌<a href='https://royal-weby.vercel.app/'>رویال وب</a></p>
                </nav>
            </footer>
        </>
    )
}

export default Footer