import TextAdvCash from "@/app/cash/TextAdvCash";
import { TextAdvModel } from "@/app/models";
import RequestHandeler from "@/services/RequestHandeler";

export async function GET() {
  const handler = new RequestHandeler(TextAdvModel, TextAdvCash);
  return handler.GetAll();
}

export async function POST(req) {
  const handler = new RequestHandeler(TextAdvModel, TextAdvCash);
  return handler.Post(req, "ads Created successfully");
}
