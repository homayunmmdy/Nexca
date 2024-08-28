import CashData from "@/cash/CashData";
import { PostModel } from "@/models";
import RequestHandeler from "@/util/handler/RequestHandeler";


export async function GET() {
  const handler = new RequestHandeler(PostModel, CashData);
  return handler.GetAll();
}

//@ts-ignore
export async function POST(req) {
  const handler = new RequestHandeler(PostModel, CashData);
  return handler.Post(req, "Post Created successfully");
}