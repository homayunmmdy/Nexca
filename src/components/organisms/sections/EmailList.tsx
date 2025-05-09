import React from "react";
import EmailListForm from "@/components/organisms/Footer/EmailListForm";
import {Container} from "@/components/atoms";

const EmailList: React.FC = () => {
    return (
        <Container className='mb-5'>
            <div
                className="relative isolate overflow-hidden bg-base-200 px-3 py-10 shadow-2xl rounded-2xl sm:rounded-3xl sm:px-12 xl:py-24">

                <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight sm:text-4xl">Subscribe to
                    EmailList
                </h2>

                <p className="mx-auto mt-2 max-w-xl text-center text-lg leading-8 ">
                    Provide your email to get email notification when we launch new products or publish new articles
                </p>
                <div className='flex justify-center items-center my-3'>
                    <EmailListForm/>
                </div>
                <svg viewBox="0 0 1024 1024"
                     className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2"
                     aria-hidden="true">
                    <circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
                            fill-opacity="0.7">
                    </circle>
                    <defs>
                        <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641" cx="0" cy="0" r="1"
                                        gradientUnits="userSpaceOnUse"
                                        gradientTransform="translate(512 512) rotate(90) scale(512)">
                            <stop stop-color="#7775D6"></stop>
                            <stop offset="1" stop-color="#7ED321" stop-opacity="0"></stop>
                        </radialGradient>
                    </defs>
                </svg>

            </div>
        </Container>
    );
};

export default EmailList;
