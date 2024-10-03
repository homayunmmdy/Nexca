import SiteConfig from "@/etc/config/stie";
import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen ">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">
          About{" "}
          <Link
            href={SiteConfig.siteUrl}
            className="underline text-indigo-700"
            title={SiteConfig.name}
          >
            {SiteConfig.name}
          </Link>
        </h1>
        <p className="mt-4 text-lg ">
          Welcome to{" "}
          <Link
            href={SiteConfig.siteUrl}
            className="underline text-indigo-700"
            title={SiteConfig.name}
          >
            {SiteConfig.name}
          </Link>
          ! Our platform allows you to create and manage your blog website
          effortlessly with our powerful admin panel.
        </p>
        <h2 className="mt-8 text-2xl font-semibold">Our Mission</h2>
        <p className="mt-4 text-lg ">
          At{" "}
          <Link
            href={SiteConfig.siteUrl}
            className="underline text-indigo-700"
            title={SiteConfig.name}
          >
            {SiteConfig.name}
          </Link>
          , we aim to simplify website management, making it accessible to
          everyone, regardless of coding knowledge.
        </p>
        <h2 className="mt-8 text-2xl font-semibold">Technologies We Use</h2>
        <ul className="mt-4 text-lg  lzist-disc list-inside">
          <li>Next.js for application structure and routing</li>
          <li>React for dynamic and interactive user interfaces</li>
          <li>MongoDB for data storage</li>
          <li>TailwindCSS and DaisyUI for styling and themes</li>
          <li>Clerk for secure authentication</li>
          <li>Vercel for hosting</li>
        </ul>
        <h2 className="mt-8 text-2xl font-semibold">Our Partners</h2>
        <p className="mt-4 text-lg ">
          We collaborate with industry leaders like Next.js, React, and Vercel
          to provide you with the best tools and services.
        </p>
        <h2 className="mt-8 text-2xl font-semibold">Contact Us</h2>
        <p className="mt-4 text-lg ">
          Got questions? We're here to help! Reach out to us anytime for support
          and inquiries.{" "}
          <Link
            className="underline text-indigo-700"
            title="contacts"
            href="/contacts"
          >
            contacts
          </Link>
        </p>
      </div>
    </div>
  );
}