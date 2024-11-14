import EmailData from "@/cash/EmailData";
import { EmailsModel } from "@/models";
import RequestHandler from "@/util/handler/RequestHandler";

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  const handler = new RequestHandler(EmailsModel, EmailData);
  return handler.DELETE(id, "Email Deleted successfully");
}
