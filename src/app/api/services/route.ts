import ServicesData from "@/cash/ServicesData";
import { ServiceModel } from "@/models";
import RequestHandler from "@/util/handler/RequestHandler";

export async function GET() {
  const handler = new RequestHandler(ServiceModel, ServicesData);
  return handler.GetAll();
}

//@ts-ignore
export async function POST(req) {
  const handler = new RequestHandler(ServiceModel, ServicesData);
  return handler.Post(req, "Service Created successfully");
}
