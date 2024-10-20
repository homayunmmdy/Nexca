import PointsCash from "@/etc/cash/PointsCash";
import { PointsCashType } from "@/types/CashTypes";

describe("Points Cash", () => {
  it("should have the correct structure", () => {
    expect(Array.isArray(PointsCash)).toBe(true);
    expect(PointsCash.length).toBeGreaterThan(0);

    PointsCash.forEach((point: PointsCashType) => {
      expect(point).toHaveProperty("_id");
      expect(point).toHaveProperty("point");
      expect(point).toHaveProperty("description");
      expect(point).toHaveProperty("link");
      expect(point).toHaveProperty("date");
      expect(point).toHaveProperty("createdAt");
      expect(point).toHaveProperty("updatedAt");
      expect(point).toHaveProperty("__v");
    });
  });

  it("should not have non-empty values", () => {
    PointsCash.forEach((point: PointsCashType) => {
      expect(point.point.trim()).not.toBe("");
      expect(point.description.trim()).not.toBe("");
      expect(point.link.trim()).not.toBe("");
    });
  });

  it("should have show valid data string for date", () => {
    PointsCash.forEach((point: PointsCashType) => {
      expect(isNaN(Date.parse(point.date))).toBeFalsy();
      expect(isNaN(Date.parse(point.createdAt))).toBeFalsy();
      expect(isNaN(Date.parse(point.updatedAt))).toBeFalsy();
    });
  });

  it("should have unique _id value", () => {
    const idSet = new Set(PointsCash.map((i) => i._id));
    expect(idSet.size).toBe(PointsCash.length);
  });
});
