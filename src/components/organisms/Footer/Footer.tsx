import SiteConfig from "@/config/site";
import Link from "next/link";
import CopyRight from "./CopyRight";
import EmailListForm from "./EmailListForm";
import FooterLinks from "./FooterLinks";
import FooterMedia from "./FooterMedia";
import { LogoName } from "@/components/atoms";

const Footer = () => {
  return (
    <>
      <footer className="w-full border-t-2 border-indigo-600">
        <div className="mx-auto w-[94%] md:w-[92%]">
          <div className="grid grid-cols-12 gap-x-5 gap-y-8 py-10">
            <div className="relative col-span-full flex h-96 flex-col items-center justify-center gap-12 rounded-2xl border-2 border-indigo-600 bg-base-100 p-6 shadow-xl xl:col-span-3 xl:w-72">
             <LogoName />
              <p className="text-center">{SiteConfig.slogan}</p>
              <FooterMedia />
            </div>
            <FooterLinks />
            <div className="col-span-full block md:col-span-4 xl:col-span-3 xl:py-16">
              <p className="mb-9 text-center text-lg font-bold xl:text-left">
                Email List
              </p>
              <EmailListForm />
            </div>
          </div>
        </div>
        <CopyRight siteName={SiteConfig.name} />
      </footer>
    </>
  );
};

export default Footer;
