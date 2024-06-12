import { handleGetRequest } from "@/app/util/apiUtil";
import CashData from "@/app/cash/CashData";
import { PostModel } from "@/app/models";

export async function GET() {
  return handleGetRequest(PostModel, CashData);
}
export async function POST(req) {
  return handlePostRequest(req, PostModel, "Post Created successfully");
}