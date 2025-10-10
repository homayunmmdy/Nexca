import { ReleaseModel } from '@/models';
import RequestHandler from '@/util/handler/RequestHandler';
import ReleaseCash from '@/cash/ReleaseCash';

export async function GET(
   req: Request,
   { params }: { params: { id: string } }
) {
   const { id } = params;
   const handler = new RequestHandler(ReleaseModel, ReleaseCash);
   return handler.Get(id);
}

export async function PUT(
   req: Request,
   { params }: { params: { id: string } }
) {
   const { id } = params;
   const handler = new RequestHandler(ReleaseModel, ReleaseCash);
   return handler.PUT(id, req, 'Release Update Successfully');
}

export async function DELETE(
   req: Request,
   { params }: { params: { id: string } }
) {
   const { id } = params;
   const handler = new RequestHandler(ReleaseModel, ReleaseCash);
   return handler.DELETE(id, 'Release Deleted Successfully');
}
