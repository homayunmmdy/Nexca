import Image from 'next/image';
import Link from 'next/link';
import { FaArrowDown } from "react-icons/fa6";

const Hero = () => {
    return (
        <>
            <section className="relative py-24 lg:py-28 bg-white">
                <div className="mx-auto max-w-7xl px-4 my-5">
                    <div className="flex flex-col lg:flex-row gap-10 lg:gap-12">
                        {/* Decorative Elements (Optional) */}
                        <div className="hidden lg:block absolute w-full lg:w-1/2 inset-y-0 lg:right-0">
                            <span className="absolute -left-6 md:left-4 top-24 lg:top-28 w-24 h-24 rotate-90 skew-x-12 rounded-3xl bg-green-400 blur-xl opacity-60 lg:opacity-95" />
                            <span className="absolute right-4 bottom-12 w-24 h-24 rounded-3xl bg-blue-600 blur-xl opacity-80" />
                        </div>
                        <span className="absolute -top-5 lg:left-0 rounded-full skew-y-12 blur-2xl opacity-40 skew-x-12 rotate-90 w-4/12 lg:w-2/12 aspect-square bg-gradient-to-tr from-blue-600 to-green-400" />

                        {/* Content */}
                        <div className="relative flex flex-col items-center text-center lg:text-left lg:py-7 xl:py-8 lg:items-start lg:max-w-none max-w-3xl mx-auto lg:mx-0 lg:flex-1 lg:w-1/2">
                            <h1 className="text-3xl leading-tight sm:text-4xl md:text-5xl xl:text-6xl font-bold text-gray-900">
                                Build Your <span className="text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 to-green-600">Own Blog</span> Website Right Now
                            </h1>
                            <p className="mt-8 text-gray-700">
                                Create your blog website in less than a day with Nexca. Our powerful admin panel lets you manage your content effortlessly, no coding required.
                            </p>
                            <div className="mt-8 flex items-center justify-center gap-3">
                                <Link className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-indigo-600 to-green-400 text-white font-bold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" href="/admin">
                                    Admin demo
                                </Link>
                                <Link title="scroll down" href="#services" className="btn btn-circle btn-outline btn-primary animate-bounce">
                                    <FaArrowDown size={24} />
                                </Link>
                            </div>
                        </div>
                        {/* Hero Image */}
                        <div className="flex flex-1 lg:w-1/2 lg:h-auto relative lg:max-w-none lg:mx-0 mx-auto max-w-3xl">
                            <Image
                                src="/img/admin.png"
                                alt="Nexca Admin Panel"
                                title="Nexca Admin Panel"
                                blurDataURL="img/admin.png"
                                placeholder="blur"
                                layout="responsive"
                                loading="lazy"
                                width={1200}
                                height={800}
                                className="lg:absolute lg:w-full lg:h-full rounded-3xl object-cover lg:max-h-none max-h-96"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero