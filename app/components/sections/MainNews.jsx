"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/autoplay"
import MainNew from "./MainNew";

const MainNews = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/Posts`);
        setData(response.data.posts);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  if (!data) {
    return <h1>loading</h1>;
  }
  const filteredData = data.filter((item) => item.section == "1");

  return (
    <div className="sm:p-3">
        <Swiper
        modules={[Navigation, EffectFade, Autoplay]}
        effect="fade"
        spaceBetween={5}
        slidesPerView={1}
        navigation
        loop={true}
        autoplay={{ delay: 3000 }}
        onSwiper={(swiper) => console.log(swiper)}
        >
          {filteredData.map((filteredData, _index) => (
              <SwiperSlide key={_index}>
                <MainNew id={_index}  post={filteredData} />
              </SwiperSlide>
            ))}
        </Swiper>
   
    </div>
  );
};

export default MainNews;