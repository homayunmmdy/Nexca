'use client'
import { useState } from "react";
import { Button, SectionsTitr } from "@/components/atoms";
import Link from "next/link";
import { FaCircleDot } from "react-icons/fa6";
import LatestLinearPost from "./LatestLinearPost";
import MostCommentedLinearPost from "./MostCommentedLinearPost";

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
        <LatestLinearPost />
      )}
      
      {activeTab === 'most' && (
        <MostCommentedLinearPost />
      )}
    </section>
  );
};

export default MostTab;