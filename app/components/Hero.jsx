import Image from 'next/image'
import React from 'react'
import HeroImage from '@/public/img/admin.png'
import Link from 'next/link'
import { FaGithub } from "react-icons/fa";

const Hero = () => {
    return (
        <section
            className="relative overflow-hidden bg-gradient-to-b from-indigo-50 via-transparent to-transparent pb-12 pt-20 sm:pb-16 sm:pt-32 lg:pb-24 xl:pb-32 xl:pt-40">
            <div className="relative z-10">
                <div
                    className="absolute inset-x-0 top-1/2 -z-10 flex -translate-y-1/2 justify-center overflow-hidden [mask-image:radial-gradient(50%_45%_at_50%_55%,white,transparent)]">
                    <svg className="h-[60rem] w-[100rem] flex-none stroke-indigo-600 opacity-20" aria-hidden="true">
                        <defs>
                            <pattern id="e9033f3e-f665-41a6-84ef-756f6778e6fe" width="200" height="200" x="50%" y="50%"
                                patternUnits="userSpaceOnUse" patternTransform="translate(-100 0)">
                                <path d="M.5 200V.5H200" fill="none"></path>
                            </pattern>
                        </defs>
                        <svg x="50%" y="50%" className="overflow-visible fill-indigo-50">
                            <path d="M-300 0h201v201h-201Z M300 200h201v201h-201Z" strokeWidth="0"></path>
                        </svg>
                        <rect width="100%" height="100%" strokeWidth="0" fill="url(#e9033f3e-f665-41a6-84ef-756f6778e6fe)">
                        </rect>
                    </svg>
                </div>
            </div>
            <div className="relative z-20 mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                        Expercice Power with
                        <span className="text-indigo-600 px-2">Nexca
                        </span>
                    </h1>
                    <h2 className="mt-6 text-lg leading-8 text-gray-600">
                        Open the github account clone the project change the .env.sample to .env.local and then write our own 
                        .env and enjoy the admin
                    </h2>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link className="isomorphic-link isomorphic-link--internal border border-black inline-flex items-center justify-center gap-2 rounded-xl hover:bg-black px-4 py-3 text-sm font-semibold hover:text-white shadow-sm transition-all duration-150 text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            href="/get_started">Github
                            <FaGithub className='w-4 h-4'/>
                        </Link>
                        <Link className="isomorphic-link isomorphic-link--internal inline-flex items-center justify-center gap-2 text-indigo-600 rounded-xl border border-indigo-600 px-4 py-3 text-sm font-semibold hover:text-white shadow-sm transition-all duration-150 hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            href="/get_started">See Demo
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd"
                                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                    clipRule="evenodd"></path>
                            </svg>
                        </Link>
                    </div>
                </div>
                <div className="relative mx-auto mt-10 max-w-lg">
                    <Image  src={HeroImage} width={520} height={240} className="w-full rounded-2xl border border-gray-100 shadow" alt="powerfull Admin panel" />
                </div>
            </div>
        </section>
    )
}

export default Hero