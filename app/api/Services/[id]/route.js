import Service from "@/app/models/Service";

import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { id } = params;

  const foundService = await Service.findOne({ _id: id });
  return NextResponse.json({ foundService }, { status: 200 });
}

export async function DELETE(req, { params }) {
  try {
    const { id } = params;

    await Service.findByIdAndDelete(id);
    return NextResponse.json({ message: "سرویس مورد نظر با موفقیت حذف شد" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
