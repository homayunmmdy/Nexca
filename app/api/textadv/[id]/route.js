import TextAdvCash from "@/app/cash/TextAdvCash";
import { TextAdvModel } from "@/app/models";
import RequestHandeler from "@/services/RequestHandeler";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { id } = params;
  const handler = new RequestHandeler(TextAdvModel, TextAdvCash);
  return handler.Get(id);
}

export async function PUT(req, { params }) {
  try {
    const { id } = params;

    const body = await req.json();
    const textAdvData = body.formData;

    const updatetextAdvData = await TextAdvModel.findByIdAndUpdate(id, {
      ...textAdvData,
    });

    return NextResponse.json(
      { message: "Ads Update Successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  const { id } = params;
  const handler = new RequestHandeler(TextAdvModel);
  return handler.DELETE(id, "Ads Deleted successfully");
}
