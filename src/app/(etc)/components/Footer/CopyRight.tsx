import Link from "next/link";

const CopyRight = ({ siteName }: { siteName: string }) => {
  return (
    <div className="py-4">
      <div className="flex items-center justify-center">
        <span className="text-sm">
          Copyright@{new Date().getFullYear()} All Right Reserved by{" "}
          <Link href="/">{siteName}</Link>
        </span>
      </div>
    </div>
  );
};

export default CopyRight;
