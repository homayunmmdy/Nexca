import SiteConfig from '@/config/site';
import React from 'react';

const PrivicyPolicyPage: React.FC = () => {
   return (
      <>
         <div className="mx-auto w-[94%] md:w-[92%]">
            <h1 className="text-2xl font-bold">Privacy Policy</h1>
            <div className="py-8">
               <p className="mb-4">
                  This privacy policy sets out how our website uses and protects
                  any information that you give us when you use this website.
               </p>

               <h2 className="mb-2 text-2xl font-bold">
                  Information We Collect
               </h2>

               <p className="mb-4">We may collect the following information:</p>

               <ul className="mb-4 list-inside list-disc">
                  <li>Your name and contact information</li>
                  <li>Demographic information</li>
                  <li>
                     Other information relevant to customer surveys and/or
                     offers
                  </li>
               </ul>

               <h2 className="mb-2 text-2xl font-bold">
                  How We Use the Information
               </h2>

               <p className="mb-4">
                  We require this information to understand your needs and
                  provide you with a better service, and in particular for the
                  following reasons:
               </p>

               <ul className="mb-4 list-inside list-disc">
                  <li>Internal record keeping</li>
                  <li>Improving our products and services</li>
                  <li>
                     Sending promotional emails about new products, special
                     offers, or other information which we think you may find
                     interesting
                  </li>
                  <li>
                     From time to time, we may also use your information to
                     contact you for market research purposes. We may contact
                     you by email, phone, or mail. We may use the information to
                     customize the website according to your interests.
                  </li>
               </ul>

               <h2 className="mb-2 text-2xl font-bold">Security</h2>

               <p className="mb-4">
                  We are committed to ensuring that your information is secure.
                  In order to prevent unauthorized access or disclosure, we have
                  put in place suitable physical, electronic, and managerial
                  procedures to safeguard and secure the information we collect
                  online.
               </p>

               <h2 className="mb-2 text-2xl font-bold">Cookies</h2>

               <p className="mb-4">
                  A cookie is a small file that asks permission to be placed on
                  your computer&apos;s hard drive. Once you agree, the file is
                  added, and the cookie helps analyze web traffic or lets you
                  know when you visit a particular site. Cookies allow web
                  applications to respond to you as an individual. The web
                  application can tailor its operations to your needs, likes,
                  and dislikes by gathering and remembering information about
                  your preferences.
               </p>

               <p className="mb-4">
                  Overall, cookies help us provide you with a better website by
                  enabling us to monitor which pages you find useful and which
                  you do not. A cookie in no way gives us access to your
                  computer or any information about you, other than the data you
                  choose to share with us.
               </p>

               <h2 className="mb-2 text-2xl font-bold">
                  Links to Other Websites
               </h2>

               <p className="mb-4">
                  Our website may contain links to other websites of interest.
                  However, once you have used these links to leave our site, you
                  should note that we do not have any control over that other
                  website. Therefore, we cannot be responsible for the
                  protection and privacy of any information which you provide
                  whilst visiting such sites and such sites are not governed by
                  this privacy statement. You should exercise caution and look
                  at the privacy statement applicable to the website in
                  question.
               </p>

               <h2 className="mb-2 text-2xl font-bold">
                  Controlling Your Personal Information
               </h2>

               <p className="mb-4">
                  You may choose to restrict the collection or use of your
                  personal information in the following ways:
               </p>

               <ul className="mb-4 list-inside list-disc">
                  <li>
                     If you have previously agreed to us using your personal
                     information for direct marketing purposes, you may change
                     your mind at any time by writing to or emailing us at{' '}
                     {SiteConfig.email}
                  </li>
                  <li>
                     We will not sell, distribute, or lease your personal
                     information to third parties unless we have your permission
                     or are required by law to do so. We may use your personal
                     information to send you promotional information about third
                     parties which we think you may find interesting if you tell
                     us that you wish this to happen.
                  </li>
                  <li>
                     You may request details of personal information which we
                     hold about you. If you would like a copy of the information
                     held on you, please write to {SiteConfig.name} or email{' '}
                     {SiteConfig.email}
                  </li>
                  <li>
                     If you believe that any information we are holding on you
                     is incorrect or incomplete, please write to or email us as
                     soon as possible at the above address. We will promptly
                     correct any information found to be incorrect.
                  </li>
               </ul>

               <p className="mb-4">
                  This privacy policy is subject to change without notice.
               </p>
            </div>
         </div>
      </>
   );
};

export default PrivicyPolicyPage;
