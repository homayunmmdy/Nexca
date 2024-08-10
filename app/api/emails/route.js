import EmailData from "@/app/cash/EmailData";
import { EmailsModel } from "@/app/models";
import RequestHandeler from "@/services/RequestHandeler";

export async function GET() {
  const handler = new RequestHandeler(EmailsModel, EmailData);
  return handler.GetAll();
}

export async function POST(req) {
  const handler = new RequestHandeler(EmailsModel, EmailData);
  return handler.Post(req, "Email Send successfully");
}