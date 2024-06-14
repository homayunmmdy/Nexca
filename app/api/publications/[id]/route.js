import { PublicationModel } from "@/app/models";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { id } = params;

  const foundTicket = await PublicationModel.findOne({ _id: id });
  return NextResponse.json({ foundTicket }, { status: 200 });
}

export async function PUT(req, { params }) {
  try {
    const { id } = params;

    const body = await req.json();
    const publicationData = body.formData;

    const updatePublicationData = await PublicationModel.findByIdAndUpdate(id, {
      ...publicationData,
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

    await PublicationModel.findByIdAndDelete(id);
    return NextResponse.json({ message: "Post Delete Successfully" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}