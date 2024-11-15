import {
  Companies,
  EmailList,
  FAQs,
  Features,
  Hero,
  PriceList,
} from "@/app/components/sections";
import React from "react";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Features />
      <Companies />
      <FAQs />
      <PriceList />
      <EmailList />
    </>
  );
};

export default Home;
