import SectionData from "@/app/cash/SectionData";
import { SectionModel } from "@/app/models";
import { handleGetRequest } from "@/app/util/apiUtil";

export async function GET() {
  return handleGetRequest(SectionModel , SectionData);
}

export async function POST(req) {
  return handlePostRequest(req, SectionModel, "Section Created successfully");
}