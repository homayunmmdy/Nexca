import { MainSec, PostsSec, SingleCard, VerticalPostsSec } from "@/components";
import ServicesNav from "./components/ServicesNav";

const DemoPage = () => {
  return (
    <>
      <ServicesNav />
      <div className="w-[94%] md:w-[92%] mx-auto pt-12">
        <MainSec />
        <PostsSec />
        <SingleCard />
        <VerticalPostsSec />
      </div>
    </>
  );
};

export default DemoPage;
