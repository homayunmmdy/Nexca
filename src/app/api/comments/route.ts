
import CommentsCash from "@/cash/CommentsCash";
import { CommentsModel } from "@/models";
import RequestHandler from "@/util/handler/RequestHandler";

export async function GET() {
  const handler = new RequestHandler(CommentsModel, CommentsCash);
  return handler.GetAll();
}

export async function POST(req: Request) {
  const handler = new RequestHandler(CommentsModel, CommentsCash);
  return handler.Post(req, "Comments Added successfully");
}
