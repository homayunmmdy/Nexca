import ServicesData from "@/cash/ServicesData";
import { ServiceModel } from "@/models";
import Services from "@/models/Services";
import RequestHandeler from "@/util/handler/RequestHandeler";

//@ts-ignore
export async function GET(req, { params }) {
  const { id } = params;
  const handler = new RequestHandeler(ServiceModel, ServicesData);
  return handler.Get(id);
}

//@ts-ignore
export async function PUT(req, { params }) {
  const { id } = params;
  const handler = new RequestHandeler(ServiceModel, ServicesData);
  return handler.PUT(id, req, "Service Update Successfully");
}

//@ts-ignore
export async function DELETE(req, { params }) {
  const { id } = params;
  const handler = new RequestHandeler(ServiceModel, Services);
  return handler.DELETE(id, "Service Deleted successfully");
}
