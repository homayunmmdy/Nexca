import { LinearAds, MainSec, PostsSec, SingleCard, VerticalPostsSec } from "@/components";
import ServicesNav from "./components/ServicesNav";

const DemoPage = () => {
  return (
    <>
      <ServicesNav />
      <div className="w-[94%] md:w-[92%] mx-auto pt-2">
        <MainSec />
        <div className="grid grid-cols-12 md:gap-9">
          <div className="col-span-12 md:col-span-9">
            <PostsSec />
          </div>
          <div className="col-span-12 md:col-span-3">
            <LinearAds />
          </div>
        </div>
        <SingleCard />
        <VerticalPostsSec />
      </div>
    </>
  );
};

export default DemoPage;
