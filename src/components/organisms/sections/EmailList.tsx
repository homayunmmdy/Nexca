import React from "react";
import EmailListForm from "@/components/organisms/Footer/EmailListForm";

const EmailList: React.FC = () => {
    return (
        <div className="mx-auto my-5 max-w-7xl px-4">
            <div
                className="mx-auto flex w-full flex-wrap items-center rounded-sm border border-gray-200 p-5 text-left md:p-8 lg:flex-nowrap">
                <div className="mb-5 w-full flex-1 md:mb-0 md:w-1/2 md:pr-5 lg:pr-10">
                    <h3 className="mb-2 text-2xl font-bold">Subscribe to EmailList</h3>
                    <p>
                        Provide your email to get email notification when we launch new
                        products or publish new articles
                    </p>
                </div>
                <div className="flex-0 w-full px-1 md:w-auto lg:w-1/2">
                    <div className='w-[360px]'>
                        <EmailListForm/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmailList;
