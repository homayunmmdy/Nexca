import EmailData from "@/cash/EmailData";
import { EmailsModel } from "@/models";
import RequestHandeler from "@/util/handler/RequestHandeler";

export async function GET() {
  const handler = new RequestHandeler(EmailsModel, EmailData);
  return handler.GetAll();
}

//@ts-ignore
export async function POST(req) {
  const handler = new RequestHandeler(EmailsModel, EmailData);
  return handler.Post(req, "Email Send successfully");
}