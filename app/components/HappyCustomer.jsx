import React from 'react'
import CustomerOne from "@/public/img/magnitify.png"
import Image from 'next/image'
import Link from 'next/link'
const HappyCustomer = () => {
  return (
    <div><div class="w-full px-4 pt-16 pb-16" id="faq">
    <h2 class="text-4xl font-bold text-center">Happy Customers</h2>
    <p class="pt-6 pb-8 text-base max-w-2xl text-center m-auto">
        Lorem ipsum dolor sit amet
        consectetur adipisicing elit nam maxime quas fugiat tempore blanditiis, eveniet quia accusantium.
    </p>
    <div
        class="mx-auto w-full max-w-4xl justify-center items-center grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        <Link  href="">
            <Image width={200} height={200} alt="" class="h-28  mx-auto" src={CustomerOne}/>
        </Link>
      
        <Link  href="">
            <Image width={200} height={200} alt="" class="h-28  mx-auto" src={CustomerOne}/>
        </Link>
      
        <Link  href="">
            <Image width={200} height={200} alt="" class="h-28  mx-auto" src={CustomerOne}/>
        </Link>
      
        <Link  href="">
            <Image width={200} height={200} alt="" class="h-28  mx-auto" src={CustomerOne}/>
        </Link>
      
        <Link  href="">
            <Image width={200} height={200} alt="" class="h-28  mx-auto" src={CustomerOne}/>
        </Link>
      
        <Link  href="">
            <Image width={200} height={200} alt="" class="h-28  mx-auto" src={CustomerOne}/>
        </Link>
      
    </div>
</div>
</div>
  )
}

export default HappyCustomer