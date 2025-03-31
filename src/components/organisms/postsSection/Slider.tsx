"use client";
import { SWIPER_SEC } from "@/config/Constants";
import useGetSection from "@/hooks/useGetSection";
import { PostsCashType } from "@/types/CashTypes";
import ErrorBoundaryProvider from "@/util/ErrorBoundaryProvider";
import "swiper/css";
import "swiper/css/navigation";
import { A11y, Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import PostCard from "./PostCard";
import "./styles.css";
import { SectionsTitr } from "@/components/atoms";
import Posts4x4Skeleton from "./skeleton/Posts4x4Skeleton";

const Slider = () => {
  const { data, loading } = useGetSection(SWIPER_SEC, -8, 5);

  if (loading) {
    return <Posts4x4Skeleton />;
  }

  return (
    <div className="bg-indigo-600 p-3 sm:p-4 md:p-6 lg:p-9">
      <div className="mt-5' mx-auto w-[94%] md:w-[92%]">
        <SectionsTitr bg="bg-[#FFBB00]">Ads Demo Page</SectionsTitr>
        <Swiper
          spaceBetween={25}
          modules={[Autoplay, Navigation, A11y]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1.2,
            },
            576: {
              slidesPerView: 2.5,
            },

            992: {
              slidesPerView: 3.5,
            },
          }}
          navigation
        >
          {data?.map((post: PostsCashType) => (
            <SwiperSlide key={post._id}>
              <PostCard post={post} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default () => (
  <ErrorBoundaryProvider>
    <Slider />
  </ErrorBoundaryProvider>
);
