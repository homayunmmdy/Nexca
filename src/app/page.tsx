import React from "react";
import {
  Companies,
  EmailList,
  FAQs,
  Hero,
  PriceList,
  Services,
} from "./components/sections";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Services />
      <Companies />
      <FAQs />
      <PriceList />
      <EmailList />
    </>
  );
};

export default Home;
