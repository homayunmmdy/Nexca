import Head from 'next/head';
import Link from 'next/link';

export default function About() {
    return (
        <div className="min-h-screen bg-white">
            <Head>
                <title>About Us - Nexca</title>
            </Head>
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-8">About Nexca</h1>
                <p className="mt-4 text-lg text-gray-700">
                    Welcome to Nexca! Our platform allows you to create and manage your blog website effortlessly with our powerful admin panel.
                </p>
                <h2 className="mt-8 text-2xl font-semibold text-gray-800">Our Mission</h2>
                <p className="mt-4 text-lg text-gray-700">
                    At Nexca, we aim to simplify website management, making it accessible to everyone, regardless of coding knowledge.
                </p>
                <h2 className="mt-8 text-2xl font-semibold text-gray-800">Technologies We Use</h2>
                <ul className="mt-4 text-lg text-gray-700 list-disc list-inside">
                    <li>Next.js for application structure and routing</li>
                    <li>React for dynamic and interactive user interfaces</li>
                    <li>MongoDB for data storage</li>
                    <li>TailwindCSS and DaisyUI for styling and themes</li>
                    <li>Clerk for secure authentication</li>
                    <li>Vercel for hosting</li>
                </ul>
                <h2 className="mt-8 text-2xl font-semibold text-gray-800">Our Partners</h2>
                <p className="mt-4 text-lg text-gray-700">
                    We collaborate with industry leaders like Next.js, React, and Vercel to provide you with the best tools and services.
                </p>
                <h2 className="mt-8 text-2xl font-semibold text-gray-800">Contact Us</h2>
                <p className="mt-4 text-lg text-gray-700">
                    Got questions? We're here to help! Reach out to us anytime for support and inquiries. <Link className="underline text-indigo-700" title="contacts" href="/contacts">contacts</Link>
                </p>
            </div>
        </div>
    )
}

