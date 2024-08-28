import SectionData from "@/cash/SectionData";
import { SectionModel } from "@/models";
import RequestHandeler from "@/util/handler/RequestHandeler";


export async function GET() {
  const handler = new RequestHandeler(SectionModel, SectionData);
  return handler.GetAll();
}

//@ts-ignore
export async function POST(req) {
  const handler = new RequestHandeler(SectionModel, SectionData);
  return handler.Post(req, "Section Created successfully");
}