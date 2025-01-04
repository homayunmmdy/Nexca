import { getById } from "@/util/ServerUtil";

export const FetchDataForEditPage = async (apiUrl: string, id: string) => {
  if (id === "new") {
    return { _id: "new" };
  }

  const data = await getById(apiUrl, id);
  return data?.document || {};
};