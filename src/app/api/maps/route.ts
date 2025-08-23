import RequestHandler from "@/util/handler/RequestHandler";
import MapsCash from "@/cash/MapsCash";
import { MapsModel } from "@/models";

export async function GET() {
  const handler = new RequestHandler(MapsModel, MapsCash);
  return handler.GetAll();
}

export async function POST(req: Request) {
  const handler = new RequestHandler(MapsModel, MapsCash);
  return handler.Post(req, "Map Created successfully");
}
