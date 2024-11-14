import TicketsCash from "@/cash/TicketsCash";
import { TicketModel } from "@/models";
import RequestHandler from "@/util/handler/RequestHandler";

export async function GET(req: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  const handler = new RequestHandler(TicketModel, TicketsCash);
  return handler.Get(id);
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  const handler = new RequestHandler(TicketModel, TicketsCash);
  return handler.PUT(id, req, "Ticket Update Successfully");
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  const handler = new RequestHandler(TicketModel, TicketsCash);
  return handler.DELETE(id, "Ticket Deleted successfully");
}
