import Link from "next/link";

const FooterLinks = () => {
  return (
    <>
      <div className="col-span-full block text-center min-[500px]:col-span-6 md:col-span-4 xl:col-span-3 xl:py-16 xl:pl-5 xl:text-left">
        <p className="mb-9 text-lg font-bold">Get In Touch</p>
        <ul className="gap-6transition-all grid duration-500">
          <li>homayoun763@gmail.com</li>
          <li>+98 922 4003 487</li>
        </ul>
      </div>
      <div className="col-span-full block min-[500px]:col-span-6 md:col-span-4 xl:col-span-3 xl:py-16">
        <p className="mb-9 text-center text-lg font-bold xl:text-left">
        Quick Links
        </p>
        <div className="flex gap-6 max-xl:justify-center xl:gap-12">
          <ul className="grid gap-6 transition-all duration-500">
            <li>
              <Link className="link-hover link hover:text-indigo-700" href="/">
                Home
              </Link>
            </li>
            <li>
              <Link
                className="link-hover link hover:text-indigo-700"
                href="/FAQs"
              >
                FAQs
              </Link>
            </li>
            <li>
              <Link
                className="link-hover link hover:text-indigo-700"
                href="/privacy_policy"
              >
               Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                className="link-hover link hover:text-indigo-700"
                href="/tickets/new"
              >
                New Ticket
              </Link>
            </li>
          </ul>
          <ul className="grid gap-6 transition-all duration-500">
            <li>
              <Link
                className="link-hover link hover:text-indigo-700"
                href="/contribution"
              >
                Contributions
              </Link>
            </li>
            <li>
              <Link
                className="link-hover link hover:text-indigo-700"
                href="/about"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="link-hover link hover:text-indigo-700"
                href="/contacts"
              >
                Contacts
              </Link>
            </li>
            <li>
              <Link
                className="link-hover link hover:text-indigo-700"
                href="/time"
              >
                Time
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default FooterLinks;
