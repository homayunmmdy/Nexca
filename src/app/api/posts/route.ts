import PostsCash from "@/cash/PostsCash";
import { PostModel } from "@/models";
import RequestHandeler from "@/util/handler/RequestHandeler";

export async function GET() {
  const handler = new RequestHandeler(PostModel, PostsCash);
  return handler.GetAll();
}

//@ts-ignore
export async function POST(req) {
  const handler = new RequestHandeler(PostModel, PostsCash);
  return handler.Post(req, "Post Created successfully");
}
