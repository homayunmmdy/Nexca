import LearnCash from "@/etc/cash/LearnCash";
import { LearnModel } from "@/models";
import RequestHandler from "@/util/handler/RequestHandler";

//@ts-ignore
export async function GET(req, { params }) {
  const { id } = params;
  const handler = new RequestHandler(LearnModel, LearnCash);
  return handler.Get(id);
}

//@ts-ignore
export async function PUT(req, { params }) {
  const { id } = params;
  const handler = new RequestHandler(LearnModel, LearnCash);
  return handler.PUT(id, req, "Post Update Successfully");
}

//@ts-ignore
export async function DELETE(req, { params }) {
  const { id } = params;
  const handler = new RequestHandler(LearnModel, LearnCash);
  return handler.DELETE(id, "Post Deleted successfully");
}
