import TextAdvCash from "@/cash/TextAdvCash";
import { TextAdvModel } from "@/models";
import RequestHandeler from "@/util/handler/RequestHandeler";

export async function GET() {
  const handler = new RequestHandeler(TextAdvModel, TextAdvCash);
  return handler.GetAll();
}

//@ts-ignore
export async function POST(req) {
  const handler = new RequestHandeler(TextAdvModel, TextAdvCash);
  return handler.Post(req, "ads Created successfully");
}
