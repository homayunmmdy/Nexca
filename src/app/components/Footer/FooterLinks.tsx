import { FooterLinkData } from "@/config/data";
import { FooterLinkType } from "@/types/entities";
import Link from "next/link";
import FooterLink from "./FooterLink";

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
          <ul className="grid grid-cols-[1fr_1fr] gap-6 transition-all duration-500">
            {FooterLinkData?.map((link: FooterLinkType) => (
              <li key={link.id}>
                <FooterLink link={link} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default FooterLinks;
