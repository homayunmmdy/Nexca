import ContributionCash from "@/cash/ContributionCash";
import { ContributionModel } from "@/models";
import RequestHandler from "@/util/handler/RequestHandler";

export async function GET() {
  const handler = new RequestHandler(ContributionModel, ContributionCash);
  return handler.GetAll();
}

export async function POST(req: Request) {
  const handler = new RequestHandler(ContributionModel, ContributionCash);
  return handler.Post(req, "Your Contribution added successfully");
}
