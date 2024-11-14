import PublicationsCash from "@/cash/PublicationsCash";
import { PublicationsModel } from "@/models";
import RequestHandler from "@/util/handler/RequestHandler";

export async function GET(req: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  const handler = new RequestHandler(PublicationsModel, PublicationsCash);
  return handler.Get(id);
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  const handler = new RequestHandler(PublicationsModel, PublicationsCash);
  return handler.PUT(id, req, "Section Update Successfully");
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  const handler = new RequestHandler(PublicationsModel, PublicationsCash);
  return handler.DELETE(id, "Section Deleted successfully");
}
