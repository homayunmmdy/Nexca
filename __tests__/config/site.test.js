import { it, expect, describe } from "vitest";
import SiteConfig from "../../app/config/site";

describe("config", () => {
  it.each([
    {
      name: "Name",
      config: SiteConfig.name,
      value: "Nexca",
    },
    {
      name: "Description",
      config: SiteConfig.description,
      value: "CMS admin panel for blogger or agency",
    },
    {
      name: "Keywords",
      config: SiteConfig.keywords,
      value: "blog , CMS admin , nexca , blogger",
    },
    {
      name: "Authors",
      config: SiteConfig.authors,
      value: "Nexca Team",
    },
    {
      name: "Langague",
      config: SiteConfig.lang,
      value: "en",
    },
    {
      name: "Direction",
      config: SiteConfig.dir,
      value: "ltr",
    },
  ])("should have correct $name", ({name, config, value }) => {
    expect(config).toBe(value);
  });

  it("should have correct siteUrl", () => {
    const API_URL = process.env.API_URL;
    expect(SiteConfig.siteUrl).toBe(`${API_URL}`);
  });

  it.each([
    { name: "Langague", config: SiteConfig.lang, characters: 2 },
    { name: "Direction", config: SiteConfig.dir, characters: 3 },
  ])("$name should have $characters characters", ({ config, characters }) => {
    expect(config).toHaveLength(characters);
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
