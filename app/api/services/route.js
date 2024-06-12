import ServicesData from "@/app/cash/ServicesData";
import { ServiceModel } from "@/app/models";
import { handleGetRequest } from "@/app/util/apiUtil";

export async function GET() {
  return handleGetRequest(ServiceModel , ServicesData);
}

export async function POST(req) {
  return handlePostRequest(req, ServiceModel, "Service Created successfully");
}