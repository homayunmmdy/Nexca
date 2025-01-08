import ContactsCash from "@/cash/ContactsCash";
import { ContactsModel } from "@/models";
import RequestHandler from "@/util/handler/RequestHandler";

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const handler = new RequestHandler(ContactsModel, ContactsCash);
  return handler.DELETE(id, "Post Deleted successfully");
}
