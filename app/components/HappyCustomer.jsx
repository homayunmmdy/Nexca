import React from 'react'
import CustomerOne from "@/public/img/magnitify.png"
import CustomerTwo from "@/public/img/vercel.png"
import CustomerThree from "@/public/img/netlify.png"
import CustomerFour from "@/public/img/Clerk.png"
import CustomerFive from "@/public/img/Google_Analytics.png"
import CustomerSix from "@/public/img/Mongodb.png"
import Image from 'next/image'
import Link from 'next/link'

const HappyCustomer = () => {
    return (
        <div><div className="w-full px-4 pt-16 pb-16">
            <h2 className="text-4xl font-bold text-center">Compines work with us</h2>
            <p className="pt-6 pb-8 text-base max-w-2xl text-center m-auto">
                Join to ower power full team and become one of ower member now
            </p>
            <div
                className="mx-auto w-full max-w-4xl justify-center items-center grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                <Link href="">
                    <Image width={200} height={200} alt="Magnitify" title="Magnitify" className="h-28  mx-auto" src={CustomerOne} />
                </Link>

                <Link href="">
                    <Image width={200} height={200} alt="Vercel" title="Vercel" className="h-28  mx-auto" src={CustomerTwo} />
                </Link>

                <Link href="">
                    <Image width={200} height={200} alt="Netlify" title="Netlify" className="h-28  mx-auto" src={CustomerThree} />
                </Link>

                <Link href="">
                    <Image width={200} height={200} alt="Clerk" title="Clerk" className="h-28  mx-auto" src={CustomerFour} />
                </Link>

                <Link href="">
                    <Image width={200} height={200} alt="Goooge Analytics" title="Goooge Analytics" className="h-28  mx-auto" src={CustomerFive} />
                </Link>

                <Link href="">
                    <Image width={200} height={200} alt="Mongodb" title="Mongodb" className="h-28  mx-auto" src={CustomerSix} />
                </Link>

            </div>
        </div>
        </div>
    )
}

export default HappyCustomer