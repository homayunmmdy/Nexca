import { it, expect, describe } from "vitest";
import SiteConfig from "../../app/config/site";

describe("config", () => {
  it("should have correct name", () => {
    expect(SiteConfig.name).toBe("Nexca");
  });
  it("should have correct description", () => {
    expect(SiteConfig.description).toBe(
      "CMS admin panel for blogger or agency"
    );
  });
  it("should have correct keywords", () => {
    expect(SiteConfig.keywords).toBe("blog , CMS admin , nexca , blogger");
  });
  it("should have correct authors", () => {
    expect(SiteConfig.authors).toBe("Nexca Team");
  });
  it("should have correct siteUrl", () => {
    const API_URL = process.env.API_URL;
    expect(SiteConfig.siteUrl).toBe(`${API_URL}`);
  });
  it("should have correct langague", () => {
    expect(SiteConfig.lang).toBe("en");
  });
  it("Langague should have 2 charactres ", () => {
    expect(SiteConfig.lang).toHaveLength(2);
  });
  it("should have correct direction", () => {
    expect(SiteConfig.dir).toBe("ltr");
  });
  it("direction should have 3 charactres ", () => {
    expect(SiteConfig.dir).toHaveLength(3);
  });
  it("should have correct navigation item", () => {
    expect(SiteConfig.nav).toEqual([
      {
        id: 1,
        name: "Home",
        link: "/",
      },
      {
        id: 2,
        name: " Admin",
        link: "/admin",
      },
      {
        id: 3,
        name: " Demo",
        link: "/demo",
      },
      {
        id: 3,
        name: "Contacts",
        link: "/contacts",
      },
    ]);
  });
});
