import { EmailsModel } from "@/app/models";
import RequestHandeler from "@/services/RequestHandeler";

export async function DELETE(req, { params }) {
  const { id } = params;
  const handler = new RequestHandeler(EmailsModel);
  return handler.DELETE(id, "Email Deleted successfully");
}