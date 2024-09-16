"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

//@ts-ignore
const useGetSection = (queryKey, url, lengthItem, secId) => {
  //@ts-ignore
  const { data: mainData, isLoading: loading } = useQuery({
    queryKey: [queryKey],
    queryFn: () => axios.get(url).then((res) => res.data),
  });

  //@ts-ignore
  const filteredData = mainData?.data?.filter((item) => item.section === `${secId}`);
  const data = filteredData?.slice(lengthItem);

  return { data, loading };
};

export default useGetSection;