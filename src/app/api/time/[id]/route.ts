import TimeLineCash from "@/cash/TimeLineCash";
import { TimeLineModel } from "@/models";
import RequestHandler from "@/util/handler/RequestHandler";

export async function GET(req: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  const handler = new RequestHandler(TimeLineModel, TimeLineCash);
  return handler.Get(id);
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  const handler = new RequestHandler(TimeLineModel, TimeLineCash);
  return handler.PUT(id, req, "Ticket Update Successfully");
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  const handler = new RequestHandler(TimeLineModel, TimeLineCash);
  return handler.DELETE(id, "Ticket Deleted successfully");
}
