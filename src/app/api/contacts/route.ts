import ContactsCash from "@/cash/ContactsCash";
import { ContactsModel } from "@/models";
import RequestHandler from "@/util/handler/RequestHandler";

export async function GET() {
  const handler = new RequestHandler(ContactsModel, ContactsCash);
  return handler.GetAll();
}

export async function POST(req: Request) {
  const handler = new RequestHandler(ContactsModel, ContactsCash);
  return handler.Post(req, "Message Send successfully");
}
