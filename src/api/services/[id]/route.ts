import ServicesData from "@/cash/ServicesData";
import { ServiceModel } from "@/models";
import Services from "@/models/Services";
import RequestHandeler from "@/util/handler/RequestHandeler";
import { NextResponse } from "next/server";

//@ts-ignore
export async function GET({ params }) {
  const { id } = params;
  const handler = new RequestHandeler(ServiceModel, ServicesData);
  return handler.Get(id);
}

//@ts-ignore
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

//@ts-ignore
export async function DELETE({ params }) {
  const { id } = params;
  const handler = new RequestHandeler(ServiceModel, Services);
  return handler.DELETE(id, "Service Deleted successfully");
}
