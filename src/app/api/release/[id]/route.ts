import { ReleaseModel } from "@/models";
import RequestHandler from "@/util/handler/RequestHandler";
import ReleaseCash from "@/cash/ReleaseCash";

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const handler = new RequestHandler(ReleaseModel, ReleaseCash);
  return handler.DELETE(id, "Release Deleted successfully");
}
