import CommentsCash from "@/cash/CommentsCash";
import { CommentsModel } from "@/models";
import RequestHandler from "@/util/handler/RequestHandler";

export async function GET(req: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  const handler = new RequestHandler(CommentsModel, CommentsCash);
  return handler.Get(id);
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  const handler = new RequestHandler(CommentsModel, CommentsCash);
  return handler.PUT(id, req, "Post Update Successfully");
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  const handler = new RequestHandler(CommentsModel, CommentsCash);
  return handler.DELETE(id, "Post Deleted successfully");
}
