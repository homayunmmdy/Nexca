import ContactsData from "@/app/cash/ContactsData";
import { ContactsModel } from "@/app/models";
import RequestHandeler from "@/services/RequestHandeler";

export async function GET() {
  const handler = new RequestHandeler(ContactsModel, ContactsData);
  return handler.GetAll();
}

export async function POST(req) {
  const handler = new RequestHandeler(ContactsModel, ContactsData);
  return handler.Post(req, "Message Send successfully");
}