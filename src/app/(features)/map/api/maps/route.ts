import RequestHandler from "@/util/handler/RequestHandler";
import MapsModel from "../../MapsModel";
import MapsCash from "../../cash/MapsCash";

export async function GET() {
  const handler = new RequestHandler(MapsModel, MapsCash);
  return handler.GetAll();
}

export async function POST(req: Request) {
  const handler = new RequestHandler(MapsModel, MapsCash);
  return handler.Post(req, "Map Created successfully");
}
