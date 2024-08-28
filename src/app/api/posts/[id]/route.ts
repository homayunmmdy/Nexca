import CashData from "@/cash/CashData";
import { PostModel } from "@/models";
import RequestHandeler from "@/util/handler/RequestHandeler";
import { NextResponse } from "next/server";

//@ts-ignore
export async function GET(req, { params }) {
  const { id } = params;
  const handler = new RequestHandeler(PostModel, CashData);
  return handler.Get(id);
}

//@ts-ignore
export async function PUT(req, { params }) {
  try {
    const { id } = params;

    const body = await req.json();
    const ticketData = body.formData;

    const updateTicketData = await PostModel.findByIdAndUpdate(id, {
      ...ticketData,
    });

    return NextResponse.json(
      { message: "Post Crated Successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

//@ts-ignore
export async function DELETE(req, { params }) {
  const { id } = params;
  const handler = new RequestHandeler(PostModel, CashData);
  return handler.DELETE(id, "Post Deleted successfully");
}