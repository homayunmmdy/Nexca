import { ReleaseModel } from "@/models";
import RequestHandler from "@/util/handler/RequestHandler";
import ReleaseCash from "@/cash/ReleaseCash";

export async function GET() {
    const handler = new RequestHandler(ReleaseModel, ReleaseCash);
    return handler.GetAll();
}

export async function POST(req: Request) {
    const handler = new RequestHandler(ReleaseModel, ReleaseCash);
    return handler.Post(req, "Release add successfully");
}
