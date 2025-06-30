"use client";
import { AIHUB_MAIN_QUERY_KEY } from "@/config/Constants";
import useGetSection from "@/hooks/useGetSection";
import { PostsCashType } from "@/types/CashTypes";
import VerticalPost from "../../(post-sections)/VerticalPost";

function MainSec() {
  const { data } = useGetSection(AIHUB_MAIN_QUERY_KEY, -1, 9);

  return data?.map((item: PostsCashType) => (
    <VerticalPost data={item} key={item._id} />
  ));
}

export default MainSec;
