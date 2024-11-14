import LearnCash from "@/cash/LearnCash";
import { LearnModel } from "@/models";
import RequestHandler from "@/util/handler/RequestHandler";

export async function GET() {
  const handler = new RequestHandler(LearnModel, LearnCash);
  return handler.GetAll();
}

//@ts-ignore
export async function POST(req) {
  const handler = new RequestHandler(LearnModel, LearnCash);
  return handler.Post(req, "Post Created successfully");
}
