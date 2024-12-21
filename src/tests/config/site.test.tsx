import { CgFeed } from "react-icons/cg";
import { FaTimeline } from "react-icons/fa6";
import { GiTicket } from "react-icons/gi";
import { MdOutlineMail, MdOutlinePostAdd } from "react-icons/md";
import { PiPhoneCallFill } from "react-icons/pi";
import { RiAdvertisementLine } from "react-icons/ri";
import { SiCloudflarepages } from "react-icons/si";
import { TbNewSection } from "react-icons/tb";
import { TiHome } from "react-icons/ti";
import { VscGraphScatter } from "react-icons/vsc";
import SiteConfig, { adminPages } from "../../config/stie";

describe("SiteConfig", () => {
  const originalEnv = process.env;

  beforeEach(() => {
    process.env = { ...originalEnv };
    process.env.API_URL = "https://nexca.vercel.app/";
  });

  afterEach(() => {
    process.env = originalEnv;
  });

  describe("Basic Configuration", () => {
    it("should have correct site metadata", () => {
      expect(SiteConfig.name).toBe("Nexca");
      expect(SiteConfig.title).toBe(
        "The Ultimate Admin Panel for Agencies and Individuals"
      );
      expect(SiteConfig.description).toContain("robust admin panel");
      expect(SiteConfig.keywords).toContain("Admin panel");
    });

    it("should have correct localization settings", () => {
      expect(SiteConfig.lang).toBe("en");
      expect(SiteConfig.dir).toBe("ltr");
    });

    it("should have valid slogan", () => {
      expect(SiteConfig.slogan).toBeTruthy();
      expect(SiteConfig.slogan.length).toBeGreaterThan(20);
    });
  });

  describe("Contact Information", () => {
    it("should have valid email format", () => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      expect(SiteConfig.email).toMatch(emailRegex);
    });

    it("should have valid social media links", () => {
      expect(SiteConfig.github).toMatch(/^https:\/\/github\.com/);
      expect(SiteConfig.linkedin).toMatch(/^https:\/\/www\.linkedin\.com/);
    });

    it("should have valid phone number format", () => {
      const phoneRegex = /^\d{4}\s\d{4}\s\d{3}$/;
      expect(SiteConfig.phoneNumber).toMatch(phoneRegex);
    });
  });

  describe("Authors and SEO", () => {
    it("should have properly configured authors array", () => {
      expect(Array.isArray(SiteConfig.authors)).toBe(true);
      expect(SiteConfig.authors[0]).toEqual({
        name: "Nexca Team",
        url: process.env.API_URL,
      });
    });

    it("should have correct SEO settings", () => {
      expect(SiteConfig.robots).toBe("index , follow");
      expect(SiteConfig.author).toBe("Magnitify Team");
      expect(SiteConfig.authorID).toBe("magnitify_Team");
    });

    it("should have valid siteURL", () => {
      expect(SiteConfig.siteURL).toBe(process.env.API_URL);
    });
  });

  describe("Navigation", () => {
    it("should have correct number of navigation items", () => {
      expect(SiteConfig.nav).toHaveLength(5);
    });

    it("should have valid structure for each nav item", () => {
      SiteConfig.nav.forEach((item) => {
        expect(item).toHaveProperty("id");
        expect(item).toHaveProperty("name");
        expect(item).toHaveProperty("link");
        expect(typeof item.id).toBe("number");
        expect(typeof item.name).toBe("string");
        expect(typeof item.link).toBe("string");
      });
    });

    it("should have unique IDs for each nav item", () => {
      const ids = SiteConfig.nav.map((item) => item.id);
      const uniqueIds = new Set(ids);
      expect(ids.length).toBe(uniqueIds.size);
    });

    it("should have valid link formats", () => {
      SiteConfig.nav.forEach((item) => {
        expect(item.link).toMatch(/^\//);
      });
    });
  });
});

describe("adminPages", () => {
  describe("Structure and Content", () => {
    it("should have correct number of admin pages", () => {
      expect(adminPages).toHaveLength(11);
    });

    it("should have valid structure for each admin page", () => {
      adminPages.forEach((page) => {
        expect(page).toHaveProperty("name");
        expect(page).toHaveProperty("href");
        expect(page).toHaveProperty("icon");
        expect(typeof page.name).toBe("string");
        expect(typeof page.href).toBe("string");
      });
    });

    it("should have proper icon components", () => {
      const iconComponents = [
        TiHome,
        CgFeed,
        MdOutlinePostAdd,
        RiAdvertisementLine,
        SiCloudflarepages,
        TbNewSection,
        MdOutlineMail,
        VscGraphScatter,
        FaTimeline,
        GiTicket,
        PiPhoneCallFill,
      ];

      adminPages.forEach((page) => {
        expect(iconComponents).toContain(page.icon);
      });
    });
  });

  describe("Routing", () => {
    it("should have valid href formats", () => {
      adminPages.forEach((page) => {
        expect(page.href).toMatch(/^\/admin/);
      });
    });

    it("should have unique hrefs", () => {
      const hrefs = adminPages.map((page) => page.href);
      const uniqueHrefs = new Set(hrefs);
      expect(hrefs.length).toBe(uniqueHrefs.size);
    });

    it("should maintain proper admin route hierarchy", () => {
      const mainAdminPage = adminPages.find((page) => page.name === "Admin");
      expect(mainAdminPage?.href).toBe("/admin");

      const subPages = adminPages.filter((page) => page.name !== "Admin");
      subPages.forEach((page) => {
        expect(page.href).toMatch(/^\/admin\//);
      });
    });
  });
});
