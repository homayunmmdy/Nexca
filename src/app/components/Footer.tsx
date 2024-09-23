import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
        <nav className="grid grid-flow-col gap-4">
          <Link title="Contact" className="link link-hover" href="/contacts">
            Contact
          </Link>
          <Link title="About" className="link link-hover" href="/about">
            About
          </Link>
          <Link
            title="Privacy Policy"
            className="link link-hover"
            href="/privacy_policy"
          >
            Privacy Policy
          </Link>
          <Link title="New Ticket" className="link link-hover" href="/tickets/new">
            New Ticket
          </Link>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <Link
              title="GitHub"
              rel="nofollow"
              aria-label="GitHub"
              href="https://github.com/homayunmmdy/Nexca"
              className="ease-in-out delay-100 transition-colors hover:text-indigo-600"
            >
              <FaGithub size={25} />
            </Link>
            <Link
              title="Linkedin"
              rel="nofollow"
              aria-label="Linkedin"
              href="www.linkedin.com/in/homayunmmdy"
              className="ease-in-out delay-100 transition-colors hover:text-indigo-600"
            >
              <FaLinkedinIn size={25} />
            </Link>
          </div>
        </nav>
        <aside>
          <p>
            Copyright@{new Date().getFullYear()} All Right Reserved by{" "}
            <Link href="https://magnitify.vercel.app/">Homayounn</Link>
          </p>
        </aside>
      </footer>
    </>
  );
};

export default Footer;
