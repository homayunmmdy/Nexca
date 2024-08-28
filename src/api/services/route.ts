import ServicesData from "@/cash/ServicesData";
import { ServiceModel } from "@/models";
import RequestHandeler from "@/util/handler/RequestHandeler";


export async function GET() {
  const handler = new RequestHandeler(ServiceModel , ServicesData);
  return handler.GetAll();
}

//@ts-ignore
export async function POST(req) {
  const handler = new RequestHandeler(ServiceModel , ServicesData);
  return handler.Post(req, "Service Created successfully");
}