import { handleGetRequest, handlePostRequest } from "@/app/util/apiUtil";
import Service from "@/app/models/Services";


export async function GET() {
  return handleGetRequest(Service);
}

export async function POST(req) {
  return handlePostRequest(req, Service, "Service Created successfully");
}