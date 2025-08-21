import React from 'react';
import { featuresData } from "../../data/features";

describe("Features Data", () => {
  it("should have the correct structure and length", () => {
    expect(Array.isArray(featuresData)).toBe(true);
    expect(featuresData).toHaveLength(4);
  });

  it("should have valid properties for each feature", () => {
    featuresData.forEach((feature) => {
      expect(feature).toHaveProperty("id");
      expect(feature).toHaveProperty("title");
      expect(feature).toHaveProperty("icon");
      expect(feature).toHaveProperty("description");

      expect(typeof feature.id).toBe("number");
      expect(typeof feature.title).toBe("string");
      expect(typeof feature.description).toBe("string");
      expect(feature.icon).toBeTruthy();
    });
  });

  it("should contain the expected feature titles", () => {
    const expectedTitles = [
      "Full CRUD",
      "Access All posts",
      "FeedBack",
      "Services",
    ];

    const actualTitles = featuresData.map((feature) => feature.title);
    expect(actualTitles).toEqual(expectedTitles);
  });
});