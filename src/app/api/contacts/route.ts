import ContactsData from "@/cash/ContactsData";
import { ContactsModel } from "@/models";
import RequestHandeler from "@/util/handler/RequestHandeler";

export async function GET() {
  const handler = new RequestHandeler(ContactsModel, ContactsData);
  return handler.GetAll();
}

//@ts-ignore
export async function POST(req) {
  const handler = new RequestHandeler(ContactsModel, ContactsData);
  return handler.Post(req, "Message Send successfully");
}
