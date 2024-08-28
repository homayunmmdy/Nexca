import React from "react";
import {
  Companies,
  EmailList,
  FAQs,
  Hero,
  Services,
} from "./components/sections";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Services />
      <Companies />
      <FAQs />
      <EmailList />
    </>
  );
};

export default Home;
