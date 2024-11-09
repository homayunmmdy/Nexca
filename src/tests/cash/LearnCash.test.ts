import LearnCash from "../../etc/cash/LearnCash";
import { LearnCashType } from "@/types/CashTypes";

describe("Ticket Cash", () => {
  it("should have the correct structure", () => {
    expect(Array.isArray(LearnCash)).toBe(true);
    expect(LearnCash.length).toBeGreaterThan(0);

    LearnCash.forEach((learn: LearnCashType) => {
      expect(learn).toHaveProperty("_id");
      expect(learn).toHaveProperty("title");
      expect(learn).toHaveProperty("imgurl");
      expect(learn).toHaveProperty("description");
      expect(learn).toHaveProperty("body");
      expect(learn).toHaveProperty("createdAt");
      expect(learn).toHaveProperty("updatedAt");
      expect(learn).toHaveProperty("__v");
    });
  });

  it("should not have non-empty values", () => {
    LearnCash.forEach((learn: LearnCashType) => {
      expect(learn.title.trim()).not.toBe("");
      expect(learn.description.trim()).not.toBe("");
      expect(learn.body.trim()).not.toBe("");
    });
  });

  it("should have show valid data string for date", () => {
    LearnCash.forEach((learn: LearnCashType) => {
      expect(isNaN(Date.parse(learn.createdAt))).toBeFalsy();
      expect(isNaN(Date.parse(learn.updatedAt))).toBeFalsy();
    });
  });

  it("should have unique _id value", () => {
    const idSet = new Set(LearnCash.map((i) => i._id));
    expect(idSet.size).toBe(LearnCash.length);
  });
});
