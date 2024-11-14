import EmailData from "@/cash/EmailData";
import { EmailsModel } from "@/models";
import RequestHandler from "@/util/handler/RequestHandler";

export async function GET() {
  const handler = new RequestHandler(EmailsModel, EmailData);
  return handler.GetAll();
}

export async function POST(req: Request) {
  const handler = new RequestHandler(EmailsModel, EmailData);
  return handler.Post(req, "Email Send successfully");
}
