import React from "react";
import {
  Companies,
  EmailList,
  FAQs,
  Features,
  Hero,
  PriceList,
} from "@/app/(etc)/components/sections";

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
