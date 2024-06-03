import Section from "@/app/models/Section";

import { NextResponse } from "next/server";

export async function DELETE(req, { params }) {
  try {
    const { id } = params;

    await Section.findByIdAndDelete(id);
    return NextResponse.json({ message: "Section Delete Successfully" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
