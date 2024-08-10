import { NextResponse } from "next/server";

class RequestHandeler {
  constructor(Model, Cache) {
    this.Model = Model;
    this.Cache = Cache;
  }

  async GetAll() {
    try {
      if (process.env.NEXT_PUBLIC_STATUS == "dev") {
        return NextResponse.json({ data: this.Cache }, { status: 200 });
      } else {
        const data = await this.Model.find();
        return NextResponse.json({ data }, { status: 200 });
      }
    } catch (err) {
      console.error(err);
      return this.ErrorResponse(err);
    }
  }

  async Post(req, successMessage) {
    try {
      const body = await req.json();
      const formData = body.formData;
      await this.Model.create(formData);
      return NextResponse.json(
        { message: successMessage || "Data created successfully" },
        { status: 201 }
      );
    } catch (err) {
      console.error(err);
      return this.ErrorResponse(err);
    }
  }

  async Get(id) {
    try {
      if (process.env.NEXT_PUBLIC_STATUS === "dev") {
        const document = this.Cache.find((doc) => doc._id === id);
      if (document) {
          return NextResponse.json({ document }, { status: 200 });
        }
      } else {
        const document = await this.Model.findOne({ _id: id });
        if (!document) {
          return NextResponse.json({ message: "Not Found" }, { status: 404 });
        }
        return NextResponse.json({ document }, { status: 200 });
      }
    } catch (error) {
      console.error(error);
      return this.ErrorResponse(err);
    }
  }

  ErrorResponse(err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}

export default RequestHandeler;
