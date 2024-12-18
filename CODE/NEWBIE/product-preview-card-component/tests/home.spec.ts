import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:5173");
});

test.describe("Home", () => {
  test("should have hero image", async ({ page }) => {
    await expect(page.getByAltText("Flowers")).toBeVisible();
  });

  test("should have sub titles and messages", async ({ page }) => {
    await expect(page.getByText("PERFUME", { exact: true })).toBeVisible();

    await expect(
      page.getByRole("heading", { name: "Gabrielle Essence Eau De Parfum" })
    ).toBeVisible();

    await expect(
      page.getByText(
        "A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL."
      )
    ).toBeVisible();

    await expect(page.getByRole("heading", { name: "$149.99" })).toBeVisible();

    await expect(page.getByText("$169.99")).toBeVisible();
  });

  test("should have button", async ({ page }) => {
    await expect(
      page.getByRole("button", { name: "Add to Cart" })
    ).toBeVisible();
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
