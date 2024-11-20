import {
  Banner,
  Companies,
  EmailList,
  FAQs,
  Features,
  Hero,
  PriceList,
} from "@/components";
import React from "react";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Features />
      <Companies />
      <FAQs />
      <Banner />
      <PriceList />
      <EmailList />
    </>
  );
};

export default Home;
