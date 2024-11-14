import PublicationsCash from "@/cash/PublicationsCash";
import { PublicationsModel } from "@/models";
import RequestHandler from "@/util/handler/RequestHandler";

export async function GET() {
  const handler = new RequestHandler(PublicationsModel, PublicationsCash);
  return handler.GetAll();
}

export async function POST(req: Request) {
  const handler = new RequestHandler(PublicationsModel, PublicationsCash);
  return handler.Post(req, "Section Created successfully");
}
