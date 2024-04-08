import Adv from "@/app/models/Adv";
import { NextResponse } from "next/server";

export async function DELETE(req, { params }) {
  try {
    const { id } = params;

    await Adv.findByIdAndDelete(id);
    return NextResponse.json({ message: "تبلیغ مورد نظر با موفقیت حذف شد" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
