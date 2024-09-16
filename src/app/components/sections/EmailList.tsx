"use client";
import { Button, Input } from "@/components";
import { EMAIL_API_URL } from "@/config/apiConstants";
import { useState } from "react";
import { TfiEmail } from "react-icons/tfi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      toast.error("Please Try One more time");
    }
  };
  return (
    <>
      <ToastContainer />
      <div className="mx-auto max-w-7xl px-4 my-5">
        <div className="flex flex-wrap items-center w-full  p-5 mx-auto text-left border border-gray-200 rounded lg:flex-nowrap md:p-8 dark:border-gray-700">
          <div className="flex-1 w-full mb-5 md:mb-0 md:pr-5 lg:pr-10 md:w-1/2">
            <h3 className="mb-2 text-2xl font-bold">
              Subscribe to EmailList
            </h3>
            <p>
              Provide your email to get email notification when we launch new
              products or publish new articles
            </p>
          </div>
          <div className="w-full px-1 flex-0 md:w-auto lg:w-1/2">
            <form onSubmit={handleSubmit}>
              <input type="hidden" name="tags" value="earlyaccess" />
              <div className="flex flex-col sm:flex-row">
                <Input
                  type="emails"
                  value={formData.emails}
                  placeholder="Enter your email address"
                  required={true}
                  id="emails"
                  name="emails"
                  style="flex-1 sm:mr-5 px-3 py-2"
                  icon={<TfiEmail />}
                  color="input-primary"
                  onChange={handleChange}
                />
                <Button
                  title="Subscribe"
                  type="submit"
                  style="mt-5 sm:mt-0 "
                  color="btn-primary"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmailList;
