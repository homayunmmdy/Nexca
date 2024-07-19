import SectionData from "@/app/cash/SectionData";
import { SectionModel } from "@/app/models";
import { handleGetSingleRequest } from "@/app/util/apiUtil";

import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { id } = params;
  return handleGetSingleRequest(SectionModel, id , SectionData);

}

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

export async function DELETE(req, { params }) {
  try {
    const { id } = params;

    await SectionModel.findByIdAndDelete(id);
    return NextResponse.json(
      { message: "Section Delete Successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
