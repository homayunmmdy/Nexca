import SectionData from "@/app/cash/SectionData";
import { SectionModel } from "@/app/models";
import RequestHandeler from "@/services/RequestHandeler";

export async function GET() {
  const handler = new RequestHandeler(SectionModel, SectionData);
  return handler.GetAll();
}

export async function POST(req) {
  const handler = new RequestHandeler(SectionModel, SectionData);
  return handler.Post(req, "Section Created successfully");
}