import CashData from "@/cash/CashData";
import TextAdvCash from "@/cash/TextAdvCash";
import { TextAdvModel } from "@/models";
import RequestHandeler from "@/util/handler/RequestHandeler";
import { NextResponse } from "next/server";

//@ts-ignore
export async function GET(req,{ params }) {
  const { id } = params;
  const handler = new RequestHandeler(TextAdvModel, TextAdvCash);
  return handler.Get(id);
}

//@ts-ignore
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

//@ts-ignore
export async function DELETE(req, { params }) {
  const { id } = params;
  const handler = new RequestHandeler(TextAdvModel,CashData);
  return handler.DELETE(id, "Ads Deleted successfully");
}
