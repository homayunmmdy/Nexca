import React from 'react';
import {CTABtn} from "@/components/molecules";
import RouteConfig from "@/config/RouteConfig";
import Image from "next/image";

function CTA() {
    return (
        <>
            <section className="w-full flex ">
                <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                    <div className="text-center space-y-5">
                        <h2 className="text-base font-semibold text-indigo-400 tracking-wide uppercase">Get started
                            now</h2>
                        <div className="inline-flex items-end justify-center w-full text-center mx-auto">
                            <Image src="/static/Image/user1.jpg" width={48} height={48} alt=''
                                 className="absolute transform translate-x-24 ml-6 rounded-full w-12 h-12 md:w-16 md:h-16 border-4 border-white"/>
                            <Image src="/static/Image/user2.jpg" width={48} height={48} alt=''
                                 className="absolute transform -translate-x-24 -ml-6 rounded-full w-12 h-12 md:w-16 md:h-16 border-4 border-white"/>
                            <Image src="/static/Image/user3.webp" width={48} height={48} alt=''
                                 className="absolute transform -translate-x-16 rounded-full w-16 h-16 md:w-20 md:h-20 border-4 border-white"/>
                            <Image src="/static/Image/user4.webp" width={48} height={48} alt=''
                                 className="absolute transform translate-x-16 rounded-full w-16 h-16 md:w-20 md:h-20 border-4 border-white"/>
                            <Image src="/static/Image/user5.webp" width={48} height={48} alt=''
                                 className="rounded-full w-20 h-20 md:w-24 md:h-24 border-4 border-white relative"/>
                        </div>
                        <p className="mt-1 text-4xl font-extrabold sm:text-5xl sm:tracking-tight lg:text-6xl">Discover
                            your
                            potential
                            <span className="px-2 py-1 relative inline-block">
                    <svg className="stroke-current bottom-0 absolute text-indigo-300 -translate-x-2" viewBox="0 0 410 18"
                         xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 6.4c16.8 16.8 380.8-11.2 397.6 5.602" stroke-width="12" fill="none"
                              fill-rule="evenodd" stroke-linecap="round"></path>
                    </svg>
                    <span className="relative">with us</span>
                </span>
                        </p>

                        <p className="max-w-3xl mt-5 mx-auto text-xl ">
                            Sign up now and experience the difference in just
                            one week
                        </p>

                        <CTABtn href={RouteConfig.admin.base}>
                            Admin Demo
                        </CTABtn>

                    </div>
                </div>
            </section>
        </>
    );
}

export default CTA;