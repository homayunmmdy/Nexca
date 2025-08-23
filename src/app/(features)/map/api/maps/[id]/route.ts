import RequestHandler from "@/util/handler/RequestHandler";
import MapsModel from "../../../MapsModel";
import MapsCash from "../../../cash/MapsCash";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const handler = new RequestHandler(MapsModel, MapsCash);
  return handler.Get(id);
}

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const handler = new RequestHandler(MapsModel, MapsCash);
  return handler.PUT(id, req, "Map Update Successfully");
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const handler = new RequestHandler(MapsModel, MapsCash);
  return handler.DELETE(id, "Map Deleted successfully");
}
