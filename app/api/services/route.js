import ServicesData from "@/app/cash/ServicesData";
import { ServiceModel } from "@/app/models";
import RequestHandeler from "@/services/RequestHandeler";

export async function GET() {
  const handler = new RequestHandeler(ServiceModel , ServicesData);
  return handler.GetAll();
}

export async function POST(req) {
  const handler = new RequestHandeler(ServiceModel , ServicesData);
  return handler.Post(req, "Service Created successfully");
}