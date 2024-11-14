import PostsCash from "@/cash/PostsCash";
import { PostModel } from "@/models";
import RequestHandler from "@/util/handler/RequestHandler";

export async function GET() {
  const handler = new RequestHandler(PostModel, PostsCash);
  return handler.GetAll();
}

export async function POST(req: Request) {
  const handler = new RequestHandler(PostModel, PostsCash);
  return handler.Post(req, "Post Created successfully");
}
