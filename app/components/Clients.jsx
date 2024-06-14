import Image from 'next/image'
import Link from 'next/link'
import Magnitify from "@/public/img/magnitify.png";
import Vercel from "@/public/img/vercel.png";
import Netlify from "@/public/img/netlify.png";
import Clerk from "@/public/img/Clerk.png";
import GooogeAnalytics from "@/public/img/Google_Analytics.png";
import Mongodb from "@/public/img/Mongodb.png";

const ClientsData = [
    {
        id: 1,
        name: "Magnitify",
        imgUrl: Magnitify,
        href: "https://magnitify.vercel.app/",
    },
    {
        id: 2,
        name: "Vercel",
        imgUrl: Vercel,
        href: "https://vercel.com/",
    },
    {
        id: 3,
        name: "Netlify",
        imgUrl: Netlify,
        href: "https://app.netlify.com/",
    },
    {
        id: 4,
        name: "Clerk",
        imgUrl: Clerk,
        href: "https://clerk.com/",
    },
    {
        id: 5,
        name: "Goooge Analytics",
        imgUrl: GooogeAnalytics,
        href: "https://analytics.google.com/",
    },
    {
        id: 6,
        name: "Mongodb",
        imgUrl: Mongodb,
        href: "https://www.mongodb.com/",
    },
];

const Clients = () => {
    return (
        <>
            <div className="w-full px-4 pt-16 pb-16">
                <h2 className="text-4xl font-bold text-center">Compines work with us</h2>
                <p className="pt-6 pb-8 text-base max-w-2xl text-center m-auto">
                    Join to ower power full team and become one of ower member now
                </p>
                <div
                    className="mx-auto w-full max-w-4xl justify-center items-center grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                    {ClientsData.map(item => (
                        <Link href={item.href} key={item.id}>
                            <Image width={200} height={200} alt={item.name} title={item.name} className="h-28  mx-auto" src={item.imgUrl} />
                        </Link>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Clients