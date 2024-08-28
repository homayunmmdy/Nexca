"use client";
import { EMAIL_API_URL } from "@/config/apiConstants";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EmailList = () => {
    const [formData, setFormData] = useState({
        emails: "",
    });
    
    //@ts-ignore
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    
    //@ts-ignore
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(EMAIL_API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ formData }),
            });

            const data = await response.json();
            toast.success(data.message);
            setFormData({
                emails: "",
            });
        } catch (error) {
            console.error("Error:", error);
            toast.error("Please Try One more time")
        }
    };
    return (
        <>
            <ToastContainer />
            <div className="mx-auto max-w-7xl px-4 my-5">
                <div
                    className="flex flex-wrap items-center w-full  p-5 mx-auto text-left border border-gray-200 rounded lg:flex-nowrap md:p-8 dark:border-gray-700">
                    <div className="flex-1 w-full mb-5 md:mb-0 md:pr-5 lg:pr-10 md:w-1/2">
                        <h3 className="mb-2 text-2xl font-bold text-gray-700 ">Subscribe to EmailList</h3>
                        <p className="text-gray-500 ">Provide your email to get email notification when we launch
                            new
                            products or publish new articles
                        </p>
                    </div>
                    <div className="w-full px-1 flex-0 md:w-auto lg:w-1/2">
                        <form onSubmit={handleSubmit}>
                            <input type="hidden" name="tags" value="earlyaccess" />
                            <div className="flex flex-col sm:flex-row">
                                <input value={formData.emails}
                                    onChange={handleChange} type="emails" id="emails" name="emails" placeholder="Enter your email address" required className="flex-1 px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md sm:mr-5 focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300" />
                                <button type="submit" className="w-full px-6 py-4 mt-5 text-white text-lg bg-gray-900 rounded-md sm:mt-0 sm:w-auto whitespace-nowrap dark:bg-gray-900"> Subscribe </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EmailList