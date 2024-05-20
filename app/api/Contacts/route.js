import { handleGetRequest, handlePostRequest } from "@/app/util/apiUtil";
import Contacts from "@/app/models/Contacts";

export async function GET() {
  return handleGetRequest(Contacts);
}

export async function POST(req) {
  return handlePostRequest(req, Contacts, "Message Send successfully");
}
