import SiteConfig from '@/config/site';
import Link from 'next/link';

export default function HelpPage() {
  return (
    <div className="min-h-screen p-8">
      {/* Main Title */}
      <h1 className="mb-8 text-4xl font-bold">
        Welcome to {SiteConfig.name} Help Page
      </h1>
      <p className='my-2'>{SiteConfig.description}</p>
      {/* Introduction Section */}
      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">
          Introduction
        </h2>
        <p className="leading-relaxed">
          Choose each section in the sidebar to learn more about {SiteConfig.name} and how to use it effectively.
        </p>
      </section>

      {/* Contact Section */}
      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">
          Contact Us
        </h2>
        <p className="leading-relaxed">
          If you have questions, feel free to contact us via email at{' '}
          <Link
            href="mailto:homayoun763@gmail.com"
            className="text-indigo-600 underline hover:text-indigo-800"
          >
            homayoun763@gmail.com
          </Link>{' '}
          or{' '}
          <Link
            href="mailto:homayunmmdy@gmail.com"
            className="text-indigo-600 underline hover:text-indigo-800"
          >
            homayunmmdy@gmail.com
          </Link>
          . You can also reach us on WhatsApp at{' '}
          <Link
            href="https://wa.me/09224003487"
            className="text-indigo-600 underline hover:text-indigo-800"
          >
            0922 4003487
          </Link>
          .
        </p>
      </section>

      {/* Reminder Section */}
      <section>
        <h2 className="mb-4 text-2xl font-semibold">
          Before Contacting Us
        </h2>
        <p className="leading-relaxed">
          Please ensure you have read through the relevant sections in the sidebar carefully.
        </p>
      </section>
    </div>
  );
}