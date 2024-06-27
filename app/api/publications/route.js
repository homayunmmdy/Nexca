import { handleGetRequest, handlePostRequest } from "@/app/util/apiUtil";
import CashData from "@/app/cash/CashData";
import { PublicationModel } from "@/app/models";

export async function GET() {
  return handleGetRequest(PublicationModel, CashData);
}
export async function POST(req) {
  return handlePostRequest(req, PublicationModel, "Publication Created successfully");
}
