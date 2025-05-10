import { CgFeed } from "react-icons/cg";
import {
  FaAdversal,
  FaHome,
  FaPager,
  FaPhoneAlt,
  FaRegEdit,
  FaSitemap,
  FaComment,
  FaTags,
} from "react-icons/fa";
import { MdOutlineMail, MdLiveTv } from "react-icons/md";
import { adminPages, EditPostPages } from "../../config/adminPage";
import { FaQuestion } from "react-icons/fa6";
import {SiRelay} from "react-icons/si";

describe("adminPages", () => {
  const AmountAdminPages = 10;

  describe("Structure and Content", () => {
    it("should have correct number of admin pages", () => {
      expect(adminPages).toHaveLength(AmountAdminPages);
    });

    it("should have valid structure for each admin page", () => {
      adminPages.forEach((page) => {
        expect(page).toHaveProperty("name");
        expect(page).toHaveProperty("href");
        expect(page).toHaveProperty("icon");
        expect(page).toHaveProperty("activate"); // Check for the activate property
        expect(typeof page.name).toBe("string");
        expect(typeof page.href).toBe("string");
        expect(typeof page.activate).toBe("boolean"); // Check that activate is a boolean
      });
    });

    it("should have proper icon components", () => {
      const iconComponents = [
        FaHome,
        CgFeed,
        FaRegEdit,
        FaAdversal,
        FaSitemap,
        FaPager,
        MdOutlineMail,
        FaPhoneAlt,
        SiRelay,
        FaQuestion,
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

describe("EditPostPages", () => {
  const AmountEditPostPages = 4;

  describe("Structure and Content", () => {
    it("should have correct number of edit post pages", () => {
      expect(EditPostPages).toHaveLength(AmountEditPostPages);
    });

    it("should have valid structure for each edit post page", () => {
      EditPostPages.forEach((page) => {
        expect(page).toHaveProperty("name");
        expect(page).toHaveProperty("href");
        expect(page).toHaveProperty("icon");
        expect(page).toHaveProperty("activate"); // Check for the activate property
        expect(typeof page.name).toBe("string");
        expect(typeof page.href).toBe("string");
        expect(typeof page.activate).toBe("boolean"); // Check that activate is a boolean
      });
    });

    it("should have proper icon components", () => {
      const iconComponents = [MdLiveTv, FaRegEdit, FaComment, FaTags];

      EditPostPages.forEach((page) => {
        expect(iconComponents).toContain(page.icon);
      });
    });
  });
});