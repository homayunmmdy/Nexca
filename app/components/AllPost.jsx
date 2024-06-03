import { POST_API_URL } from "../config/constants";

const AllPost = async () => {
  const API_URL = process.env.API_URL;

  try {
    const res = await fetch(`${API_URL}${POST_API_URL}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);
  }
};

export default AllPost;