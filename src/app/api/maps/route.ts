import RequestHandler from "@/util/handler/RequestHandler";
import {MapsModel} from "@/models";
import MapsCash from "@/cash/MapsCash";

export async function GET() {
  const handler = new RequestHandler(MapsModel, MapsCash);
  return handler.GetAll();
}

export async function POST(req: Request) {
  const handler = new RequestHandler(MapsModel, MapsCash);
  return handler.Post(req, "Section Created successfully");
}
