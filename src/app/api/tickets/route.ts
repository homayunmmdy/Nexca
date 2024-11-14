import TicketsCash from "@/cash/TicketsCash";
import { TicketModel } from "@/models";
import RequestHandler from "@/util/handler/RequestHandler";

export async function GET() {
  const handler = new RequestHandler(TicketModel, TicketsCash);
  return handler.GetAll();
}

export async function POST(req: Request) {
  const handler = new RequestHandler(TicketModel, TicketsCash);
  return handler.Post(req, "Ticket Created successfully");
}
