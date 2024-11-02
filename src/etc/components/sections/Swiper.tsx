"use client"
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import "./styles.css";
import { SWIPER_SEC } from "@/etc/config/Constants";
import useGetSection from "@/hooks/useGetSection";
import { PostsCashType } from "@/types/CashTypes";
import { A11y, Autoplay, Navigation } from "swiper/modules";
import { PostsSecSkeleton } from "../skelton";
import PostCard from "./PostCard";
import { Titr } from "@/components";

export default () => {
  const { data, loading } = useGetSection(SWIPER_SEC, -8, 5);

  if (loading) {
    return <PostsSecSkeleton />;
  }

  return (
    <>
     <Titr borderColor="white" style="text-white" title="Swiper Posts" item="text-left" />
      <Swiper
        spaceBetween={25}
        modules={[Autoplay, Navigation, A11y]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          // when window width is >= 640px
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
          <SwiperSlide>
            <PostCard key={post._id} post={post} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
