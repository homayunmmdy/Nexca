import ContributionCash from "@/cash/ContributionCash";
import { ContributionModel } from "@/models";
import RequestHandler from "@/util/handler/RequestHandler";

export async function GET(req: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  const handler = new RequestHandler(ContributionModel, ContributionCash);
  return handler.Get(id);
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  const handler = new RequestHandler(ContributionModel, ContributionCash);
  return handler.PUT(id, req, "Contribue Update Successfully");
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  const handler = new RequestHandler(ContributionModel, ContributionCash);
  return handler.DELETE(id, "Contribute Deleted successfully");
}
