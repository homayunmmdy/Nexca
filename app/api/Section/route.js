import Section from "@/app/models/Section";
import { handleGetRequest, handlePostRequest } from "@/app/util/apiUtil";

export async function GET() {
  return handleGetRequest(Section);
}

export async function POST(req) {
  return handlePostRequest(req, Section, "Section Created successfully");
}