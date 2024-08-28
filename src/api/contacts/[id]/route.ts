import ContactsData from "@/cash/ContactsData";
import { ContactsModel } from "@/models";
import RequestHandeler from "@/util/handler/RequestHandeler";


//@ts-ignore
export async function DELETE({ params }) {
  const { id } = params;
  const handler = new RequestHandeler(ContactsModel, ContactsData);
  return handler.DELETE(id, "Post Deleted successfully");
}