import Service from "@/app/models/Service";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const services = await Service.find();

    return NextResponse.json({ services }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    const serviceData = body.formData;

    await Service.create(serviceData);

    return NextResponse.json(
      { message: "سرویس با موفقیت ساخته شد" },
      { status: 201 }
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}
