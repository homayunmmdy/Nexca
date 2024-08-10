import CashData from "@/app/cash/CashData";
import { PostModel } from "@/app/models";
import RequestHandeler from "@/services/RequestHandeler";

export async function GET() {
  const handler = new RequestHandeler(PostModel, CashData);
  return handler.GetAll();
}

export async function POST(req) {
  const handler = new RequestHandeler(PostModel, CashData);
  return handler.Post(req, "Post Created successfully");
}