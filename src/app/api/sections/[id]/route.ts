import SectionData from "@/cash/SectionData";
import { SectionModel } from "@/models";
import RequestHandeler from "@/util/handler/RequestHandeler";
import { NextResponse } from "next/server";

//@ts-ignore
export async function GET(req,{ params }) {
  const { id } = params;
  const handler = new RequestHandeler(SectionModel, SectionData);
  return handler.Get(id);
}

//@ts-ignore
export async function PUT(req, { params }) {
  try {
    const { id } = params;

    const body = await req.json();
    const sectionData = body.formData;

    const updatesectionData = await SectionModel.findByIdAndUpdate(id, {
      ...sectionData,
    });

    return NextResponse.json(
      { message: "Section Update Successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
//@ts-ignore
export async function DELETE(req,{ params }) {
  const { id } = params;
  const handler = new RequestHandeler(SectionModel, SectionData);
  return handler.DELETE(id, "Section Deleted successfully");
}