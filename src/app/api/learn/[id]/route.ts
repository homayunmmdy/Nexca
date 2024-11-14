import LearnCash from "@/cash/LearnCash";
import { LearnModel } from "@/models";
import RequestHandler from "@/util/handler/RequestHandler";

export async function GET(req: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  const handler = new RequestHandler(LearnModel, LearnCash);
  return handler.Get(id);
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  const handler = new RequestHandler(LearnModel, LearnCash);
  return handler.PUT(id, req, "Post Update Successfully");
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  const handler = new RequestHandler(LearnModel, LearnCash);
  return handler.DELETE(id, "Post Deleted successfully");
}
