"use client";
import { CONTACTS_API_URL } from "@/config/apiConstants";
import SiteConfig from "@/config/stie";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Circles from "./components/Circle";
import { Button, Input } from "@/components";
import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";
import FormHandler from "@/util/handler/FormHandler";

const ContactsPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handler = new FormHandler(setFormData)

  //@ts-ignore
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(CONTACTS_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ formData }),
      });

      const data = await response.json();
      toast.success(data.message);
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Error:", error);
      toast.error("Please Try One more time");
    }
  };
  return (
    <>
      <ToastContainer />
      <section className="relative z-10 overflow-hidden py-12 sm:py-20 lg:py-[120px]">
        <div className="container mx-auto">
          <div className="flex flex-wrap mx-4 justify-center lg:justify-between">
            <div className="w-full px-4 lg:w-1/2 xl:w-5/12 order-2 lg:order-1">
              <div className="relative p-8  rounded-lg shadow-2xl  sm:p-12">
                <form onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <Input
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={formData.name}
                      onChange={handler.handleChange}
                      required={true}
                      style="w-full"
                      icon={<FaUser />}
                    />
                  </div>
                  <div className="mb-6">
                    <Input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handler.handleChange}
                      required={true}
                      style="w-full"
                      icon={<TfiEmail />}
                    />
                  </div>
                  <div className="mb-6">
                    <textarea
                      rows={6}
                      name="message"
                      placeholder="Message"
                      value={formData.message}
                      onChange={handler.handleChange}
                      required
                      className="textarea textarea-bordered w-full"
                    ></textarea>
                  </div>
                  <div>
                    <Button
                      title="send"
                      type="submit"
                      color="btn-primary"
                      style="p-3 w-full"
                    />
                  </div>
                </form>
                <div>
                  <span className="absolute -top-10 -right-9 z-[-1]">
                    <svg
                      width="100"
                      height="100"
                      viewBox="0 0 100 100"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0 100C0 44.7715 0 0 0 0C55.2285 0 100 44.7715 100 100C100 100 100 100 0 100Z"
                        fill="#6366f1"
                      />
                    </svg>
                  </span>
                  <span className="absolute -right-10 top-[90px] z-[-1]">
                    <Circles />
                  </span>
                  <span className="absolute -left-7 -bottom-7 z-[-1]">
                    <Circles />
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2 xl:w-6/12 order-1 lg:order-2">
              <div className="mb-12 px-5 pt-3 sm:max-w-[570px] lg:mb-0">
                <span className="block mb-4 text-base font-semibold text-indigo-500">
                  Contacts
                </span>
                <h2 className=" mb-6 text-[32px] font-bold uppercase sm:text-[40px] lg:text-[36px] xl:text-[40px]">
                  Contact with us
                </h2>
                <p className="text-base leading-relaxed  ">
                  If you have any question and feedback contact with us
                </p>
                <p className="text-base leading-relaxed   mb-9">
                  {SiteConfig.description}
                </p>
                <div className="mb-8 flex w-full max-w-[370px] gap-3">
                  <div className="bg-primary/5 text-indigo-500 mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded sm:h-[70px] sm:max-w-[70px]">
                    <FaPhone size={24} />
                  </div>
                  <div className="w-full">
                    <h4 className="mb-1 text-xl font-bold ">Phone Number</h4>
                    <p className="text-sm sm:text-base">{SiteConfig.phoneNumber}</p>
                  </div>
                </div>
                <div className="mb-8 flex w-full max-w-[370px] gap-3">
                  <div className="bg-primary/5 text-indigo-500 mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded sm:h-[70px] sm:max-w-[70px]">
                    <TfiEmail size={24} />
                  </div>
                  <div className="w-full">
                    <h4 className="mb-1 text-xl font-bold ">Email Address</h4>
                    <p className="text-sm sm:text-base">{SiteConfig.email}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactsPage;
