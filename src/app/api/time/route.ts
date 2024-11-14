import TimeLineCash from "@/cash/TimeLineCash";
import { TimeLineModel } from "@/models";
import RequestHandler from "@/util/handler/RequestHandler";

export async function GET() {
  const handler = new RequestHandler(TimeLineModel, TimeLineCash);
  return handler.GetAll();
}

export async function POST(req: Request) {
  const handler = new RequestHandler(TimeLineModel, TimeLineCash);
  return handler.Post(req, "Ticket Created successfully");
}
