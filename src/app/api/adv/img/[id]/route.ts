import RequestHandler from "@/util/handler/RequestHandler";
import ImgAdvCash from "@/cash/ImgAdvCash";
import {ImgAdvModel} from "@/models";

export async function GET(req: Request, { params }: { params: { id: string } }) {
    const { id } = params;
    const handler = new RequestHandler(ImgAdvModel, ImgAdvCash);
    return handler.Get(id);
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
    const { id } = params;
    const handler = new RequestHandler(ImgAdvModel, ImgAdvCash);
    return handler.PUT(id, req, "Ads Update Successfully");
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
    const { id } = params;
    const handler = new RequestHandler(ImgAdvModel, ImgAdvCash);
    return handler.DELETE(id, "Ads Deleted successfully");
}
