import Service from "../../models/Services";

import { NextResponse } from "next/server";

export async function DELETE(req, { params }) {
  try {
    const { id } = params;

    await Service.findByIdAndDelete(id);
    return NextResponse.json({ message: "Service Delete Successfully" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
