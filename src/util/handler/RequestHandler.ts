import { Model } from "mongoose";
import { NextResponse } from "next/server";

class RequestHandler<
  T extends {
    _id: string;
  }
> {
  private Model: Model<T>;
  private Cache: T[];

  constructor(Model: Model<T>, Cache: T[]) {
    this.Model = Model;
    this.Cache = Cache;
  }

  async GetAll() {
    try {
      if (process.env.NEXT_PUBLIC_STATUS === "dev") {
        return NextResponse.json<T[]>({ data: this.Cache } as any, {
          status: 200,
        });
      } else {
        const data = await this.Model.find();
        return NextResponse.json<T[]>({ data } as any, { status: 200 });
      }
    } catch (error) {
      console.error(error);
      return this.ErrorResponse(error);
    }
  }
  async Post(req: Request, successMessage: string) {
    try {
      const body = await req.json();
      const formData = body.formData as T;
      await this.Model.create(formData);
      return NextResponse.json(
        { message: successMessage || "Data created successfully" },
        { status: 201 }
      );
    } catch (error) {
      console.error(error);
      return this.ErrorResponse(error);
    }
  }
  async Get(id: string) {
    try {
      if (process.env.NEXT_PUBLIC_STATUS === "dev") {
        const document = this.Cache.find((doc) => doc._id === id);
        if (document) {
          return NextResponse.json<T>({ document } as any, { status: 200 });
        }
      } else {
        const document = await this.Model.findOne({ _id: id });
        if (!document) {
          return NextResponse.json({ message: "Not Found" }, { status: 404 });
        }
        return NextResponse.json<T>({ document } as any, { status: 200 });
      }
    } catch (error) {
      console.error(error);
      return this.ErrorResponse(error);
    }
  }

  async PUT(id: string, req: Request, successMessage: string) {
    try {
      const body = await req.json();
      const Data = body.formData as T;

      const updateData = await this.Model.findByIdAndUpdate(id, {
        ...Data,
      });

      return NextResponse.json(
        { message: successMessage || "Data Update Successfully" },
        { status: 200 }
      );
    } catch (error) {
      console.error(error);
      return NextResponse.json({ message: "Error", error }, { status: 500 });
    }
  }

  async DELETE(id: string, successMessage: string) {
    try {
      const deleteDocument = await this.Model.findByIdAndDelete(id);
      if (!deleteDocument) {
        return NextResponse.json({ message: "Not Found" }, { status: 404 });
      }
      return NextResponse.json(
        { message: successMessage || "Data Delete Successfully" },
        { status: 200 }
      );
    } catch (error) {
      console.error(error);
      return this.ErrorResponse(error);
    }
  }

  ErrorResponse(err: any) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}

export default RequestHandler;
