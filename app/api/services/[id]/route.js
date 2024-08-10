import ServicesData from "@/app/cash/ServicesData";
import { ServiceModel } from "@/app/models";
import RequestHandeler from "@/services/RequestHandeler";
import { NextResponse } from "next/server";


export async function GET(request, { params }) {
  const { id } = params;
  const handler = new RequestHandeler(ServiceModel, ServicesData);
  return handler.Get(id);
}

export async function PUT(req, { params }) {
  try {
    const { id } = params;

    const body = await req.json();
    const servicesData = body.formData;

    const updateservicesData = await ServiceModel.findByIdAndUpdate(id, {
      ...servicesData,
    });

    return NextResponse.json(
      { message: "Services Update Successfully" },
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

    await ServiceModel.findByIdAndDelete(id);
    return NextResponse.json(
      { message: "Service Delete Successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
