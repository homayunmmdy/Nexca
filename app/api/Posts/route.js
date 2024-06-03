import Post from "@/app/models/Post";
import { handleGetRequest } from "@/app/util/apiUtil";
import CashData from "@/app/cash/CashData";

export async function GET() {
  return handleGetRequest(Post, CashData);
}
export async function POST(req) {
  return handlePostRequest(req, Post, "Post Created successfully");
}