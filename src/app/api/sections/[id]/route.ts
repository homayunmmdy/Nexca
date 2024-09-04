import SectionData from "@/cash/SectionData";
import { SectionModel } from "@/models";
import RequestHandeler from "@/util/handler/RequestHandeler";

//@ts-ignore
export async function GET(req, { params }) {
  const { id } = params;
  const handler = new RequestHandeler(SectionModel, SectionData);
  return handler.Get(id);
}

//@ts-ignore
export async function PUT(req, { params }) {
  const { id } = params;
  const handler = new RequestHandeler(SectionModel, SectionData);
  return handler.PUT(id, req, "Section Update Successfully");
}

//@ts-ignore
export async function DELETE(req, { params }) {
  const { id } = params;
  const handler = new RequestHandeler(SectionModel, SectionData);
  return handler.DELETE(id, "Section Deleted successfully");
}
