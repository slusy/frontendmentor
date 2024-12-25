import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:5173");
});

test.describe("Home", () => {
  test("Should have the avatar icon", async ({ page }) => {
    const avatar = page.getByAltText("avatar");

    await expect(avatar).toBeVisible();
    await expect(avatar).toHaveAttribute("src", "avatar-jessica.jpeg");
  });

  test("should have heading subheading and a paragraph", async ({ page }) => {
    await expect(
      page.getByRole("heading", { name: "Jessica Randall" })
    ).toBeVisible();

    await expect(page.getByText("London, United Kingdom")).toBeVisible();

    await expect(
      page.getByText("Front-end developer and avid reader.")
    ).toBeVisible();
  });

  test("should have social links", async ({ page }) => {
    const links = page.locator('a[href="#"]');
    const expectedLinks = [
      "Github",
      "Frontend Mentor",
      "LinkedIn",
      "Twitter",
      "Instagram",
    ];

    await expect(links).toHaveCount(5);

    for (const linkText of expectedLinks) {
      const link = page.getByText(linkText);
      await expect(link).toBeVisible();
    }
  });
});

test.describe("portfolio component", () => {
  test("render portfolio links correctly", async ({ page }) => {
    const portfolioLink = page.locator(
      'a[href="http://achal-socials.vercel.app/portfolio"]'
    );

    await expect(portfolioLink).toBeVisible();
    await expect(portfolioLink).toHaveAttribute(
      "href",
      "http://achal-socials.vercel.app/portfolio"
    );
    await expect(portfolioLink).toHaveAttribute("target", "_blank");

    const portfolioIcon = portfolioLink.locator('img[alt="portfolio"]');
    await expect(portfolioIcon).toBeVisible();
    await expect(portfolioIcon).toHaveAttribute("src", "icon-globe.svg");
  });

  test("verify the links opens the portfoilo", async ({ context, page }) => {
    const newPagePromise = context.waitForEvent("page");

    const portfolioLink = page.locator(
      'a[href="http://achal-socials.vercel.app/portfolio"]'
    );
    await portfolioLink.click();

    const newPage = await newPagePromise;

    await expect(newPage).toHaveURL("https://spudoodle.vercel.app/");
  });
});
