import CashData from "@/app/cash/CashData";
import { PostModel } from "@/app/models";
import RequestHandeler from "@/services/RequestHandeler";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { id } = params;
  const handler = new RequestHandeler(PostModel, CashData);
  return handler.Get(id);
}

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

export async function DELETE(req, { params }) {
  const { id } = params;
  const handler = new RequestHandeler(PostModel);
  return handler.DELETE(id, "Post Deleted successfully");
}