import ContactsData from "@/cash/ContactsData";
import { ContactsModel } from "@/models";
import RequestHandler from "@/util/handler/RequestHandler";

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  const handler = new RequestHandler(ContactsModel, ContactsData);
  return handler.DELETE(id, "Post Deleted successfully");
}
