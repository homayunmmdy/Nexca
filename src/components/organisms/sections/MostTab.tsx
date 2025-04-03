'use client'
import { useState } from "react";
import { Button, SectionsTitr } from "@/components/atoms";
import Link from "next/link";
import { FaCircleDot } from "react-icons/fa6";

const MostTab = () => {
  const [activeTab, setActiveTab] = useState<'latest' | 'most'>('latest');

  return (
    <section className="border border-indigo-500 p-3 rounded-lg">
      <div className="flex gap-2 items-center justify-between mb-2">
        <Button
          onClick={() => setActiveTab('latest')}
          color={`${activeTab === 'most' ? "btn-primary" : "btn-success"}`}
        >
          Latest Post
        </Button>
        <Button
          onClick={() => setActiveTab('most')}
          color={`${activeTab === 'latest' ? "btn-primary" : "btn-success"}`}
        >
         Most Commented
        </Button>
      </div>
      
      {activeTab === 'latest' && (
        <ul className="mb-3 flex flex-col gap-4">
          {[...Array(3)].map((_, index) => (
            <li
              key={index}
              className="group flex cursor-pointer items-start gap-2 rounded-xl border-2 border-dotted border-gray-400 p-2 hover:border-solid hover:border-gray-900"
            >
              <div className="h-7 w-7 shrink-0">
                <FaCircleDot className="h-full w-full text-indigo-700" size={28} color="#4338CA" />
              </div>
              <Link className="line-clamp-2 font-semibold group-hover:text-indigo-600" href="/">
                Latest post {index + 1}
              </Link>
            </li>
          ))}
        </ul>
      )}
      
      {activeTab === 'most' && (
        <ul className="mb-3 flex flex-col gap-4">
          {[...Array(3)].map((_, index) => (
            <li
              key={index}
              className="group flex cursor-pointer items-start gap-2 rounded-xl border-2 border-dotted border-gray-400 p-2 hover:border-solid hover:border-gray-900"
            >
              <div className="h-7 w-7 shrink-0">
                <FaCircleDot className="h-full w-full text-indigo-700" size={28} color="#4338CA" />
              </div>
              <Link className="line-clamp-2 font-semibold group-hover:text-indigo-600" href="/">
                Most commented {index + 1}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default MostTab;