import Adv from "@/app/models/Adv";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const ads = await Adv.find();

    return NextResponse.json({ ads }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    const advData = body.formData;

    await Adv.create(advData);

    return NextResponse.json(
      { message: "تبلیغ با موفقیت ساخته شد" },
      { status: 201 }
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}
