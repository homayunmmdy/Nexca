import APIClient from "@/util/apiClient";
import {POST_API_URL} from "@/config/apiConstants";

export async function getSinglePost(postId: string | string[]) {
    if (!postId) throw new Error("Post ID is required");

    const apiClient = new APIClient(POST_API_URL);
    return apiClient.get(`/${postId}`);
}