import { PriceItemDate } from "../../data/price";

describe("Price Item Data", () => {
  it("should have the correct structure and length", () => {
    expect(Array.isArray(PriceItemDate)).toBe(true);
    expect(PriceItemDate).toHaveLength(3);
  });

  it("should have valid properties for each price item", () => {
    PriceItemDate.forEach((item) => {
      expect(item).toHaveProperty("id");
      expect(item).toHaveProperty("special");
      expect(item).toHaveProperty("titr");
      expect(item).toHaveProperty("description");
      expect(item).toHaveProperty("features");

      expect(typeof item.id).toBe("number");
      expect(typeof item.special).toBe("boolean");
      expect(typeof item.titr).toBe("string");
      expect(typeof item.description).toBe("string");
      expect(Array.isArray(item.features)).toBe(true);
    });
  });

  it("should have valid features structure for each price item", () => {
    PriceItemDate.forEach((item) => {
      item.features.forEach((feature) => {
        expect(feature).toHaveProperty("id");
        expect(feature).toHaveProperty("name");
        expect(feature).toHaveProperty("mark");

        expect(typeof feature.id).toBe("number");
        expect(typeof feature.name).toBe("string");
        expect(typeof feature.mark).toBe("boolean");
      });
    });
  });

  it("should have the correct pricing tiers", () => {
    const expectedTiers = ["Starter", "Professional", "Enterprise"];
    const actualTiers = PriceItemDate.map((item) => item.titr);
    expect(actualTiers).toEqual(expectedTiers);
  });

  it("should have Professional as the only special tier", () => {
    const professionalItem = PriceItemDate.find((item) => item.titr === "Professional");
    const nonProfessionalItems = PriceItemDate.filter(
      (item) => item.titr !== "Professional"
    );

    expect(professionalItem?.special).toBe(true);
    nonProfessionalItems.forEach((item) => {
      expect(item.special).toBe(false);
    });
  });
});