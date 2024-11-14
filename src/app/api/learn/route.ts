import LearnCash from "@/cash/LearnCash";
import { LearnModel } from "@/models";
import RequestHandler from "@/util/handler/RequestHandler";

export async function GET() {
  const handler = new RequestHandler(LearnModel, LearnCash);
  return handler.GetAll();
}

export async function POST(req: Request) {
  const handler = new RequestHandler(LearnModel, LearnCash);
  return handler.Post(req, "Post Created successfully");
}
