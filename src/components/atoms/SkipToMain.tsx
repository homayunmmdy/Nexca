import Link from 'next/link';

export default function SkipToMain() {
   return (
      <Link
         className="absolute left-0 top-0 z-[60] -translate-y-full bg-black px-4 py-2 text-white focus:translate-y-0 focus:outline-none"
         href="#main"
         aria-label="Skip to main content"
         title="Skip to main content"
      >
         Skip to main content
      </Link>
   );
}
