import RequestHandler from '@/util/handler/RequestHandler';
import ImgAdvCash from '@/cash/ImgAdvCash';
import { ImgAdvModel } from '@/models';

export async function GET() {
   const handler = new RequestHandler(ImgAdvModel, ImgAdvCash);
   return handler.GetAll();
}

export async function POST(req: Request) {
   const handler = new RequestHandler(ImgAdvModel, ImgAdvCash);
   return handler.Post(req, 'ads Created successfully');
}
