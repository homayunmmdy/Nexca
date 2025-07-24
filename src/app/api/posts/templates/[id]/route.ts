import PostsCash from "@/cash/PostsCash";
import { PostModel } from "@/models";
import RequestHandler from "@/util/handler/RequestHandler";

export async function GET(req: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  const handler = new RequestHandler(PostModel, PostsCash);
  return handler.GetByTemplate(id);
}