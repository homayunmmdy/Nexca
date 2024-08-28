import EmailData from "@/cash/EmailData";
import { EmailsModel } from "@/models";
import RequestHandeler from "@/util/handler/RequestHandeler";

//@ts-ignore
export async function DELETE({ params }) {
  const { id } = params;
  const handler = new RequestHandeler(EmailsModel, EmailData);
  return handler.DELETE(id, "Email Deleted successfully");
}