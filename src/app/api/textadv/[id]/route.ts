import TextAdvCash from "@/cash/TextAdvCash";
import { TextAdvModel } from "@/models";
import RequestHandeler from "@/util/handler/RequestHandeler";

//@ts-ignore
export async function GET(req, { params }) {
  const { id } = params;
  const handler = new RequestHandeler(TextAdvModel, TextAdvCash);
  return handler.Get(id);
}

//@ts-ignore
export async function PUT(req, { params }) {
  const { id } = params;
  const handler = new RequestHandeler(TextAdvModel, TextAdvCash);
  return handler.PUT(id, req, "Ads Update Successfully");
}

//@ts-ignore
export async function DELETE(req, { params }) {
  const { id } = params;
  const handler = new RequestHandeler(TextAdvModel, TextAdvCash);
  return handler.DELETE(id, "Ads Deleted successfully");
}
