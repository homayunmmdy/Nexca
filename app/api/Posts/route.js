import { handleGetRequest, handlePostRequest } from "@/app/util/apiUtil";
import Post from "../../models/Post";


export async function GET() {
  return handleGetRequest(Post);
}

export async function POST(req) {
  return handlePostRequest(req, Post, "Post Created successfully");
}