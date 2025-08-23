import Link from "next/link";
import React from "react";

interface Props {
  siteName: string;
}

const CopyRight: React.FC<Props> = ({ siteName }: Props) => {
  return (
    <div className="py-4">
      <span
        className="text-sm flex items-center justify-center"
        data-testid="copyrightText"
      >
        Copyright@{new Date().getFullYear()} All Right Reserved by{" "}
        <Link href="/" title={siteName}>
          {siteName}
        </Link>
      </span>
    </div>
  );
};

export default CopyRight;
