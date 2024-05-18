import { handleGetRequest, handlePostRequest } from "@/app/util/apiUtil";
import Post from "../../models/Post";


export async function GET() {
  return handleGetRequest(Post);
}

export async function POST(req) {
  return handlePostRequest(req, Post);
}

// export async function POST(req) {
//   try {
//     const body = await req.json();
//     const ticketData = body.formData;

//     await Post.create(ticketData);

//     return NextResponse.json({ message: "Your message has been successfully sent" }, { status: 201 });
//   } catch (err) {
//     console.log(err);
//     return NextResponse.json({ message: "Error", err }, { status: 500 });
//   }
// }