import CashData from "@/app/cash/CashData";
import { PostModel } from "@/app/models";
import { handleGetSingleRequest } from "@/app/util/apiUtil";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { id } = params;
  return handleGetSingleRequest(PostModel, id , CashData);

}

export async function PUT(req, { params }) {
  try {
    const { id } = params;

    const body = await req.json();
    const ticketData = body.formData;

    const updateTicketData = await PostModel.findByIdAndUpdate(id, {
      ...ticketData,
    });

    return NextResponse.json({ message: "Post Crated Successfully"}, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  try {
    const { id } = params;

    await PostModel.findByIdAndDelete(id);
    return NextResponse.json({ message: "Post Delete Successfully" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}