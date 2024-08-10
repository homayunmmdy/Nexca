import { ContactsModel } from "@/app/models";
import RequestHandeler from "@/services/RequestHandeler";

export async function DELETE(req, { params }) {
  const { id } = params;
  const handler = new RequestHandeler(ContactsModel);
  return handler.DELETE(id, "Post Deleted successfully");
}