import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:5173");
});

test.describe("Layout", () => {
  test("should contain day, month and year labels", async ({ page }) => {
    await expect(page.getByText("day", { exact: true })).toBeVisible();
    await expect(page.getByText("month", { exact: true })).toBeVisible();
    await expect(page.getByText("year", { exact: true })).toBeVisible();
  });

  test("should contain three input fields", async ({ page }) => {
    await expect(page.getByPlaceholder("DD")).toBeVisible();
    await expect(page.getByPlaceholder("MM")).toBeVisible();
    await expect(page.getByPlaceholder("YYYY")).toBeVisible();
  });

  test("should contain a button", async ({ page }) => {
    await expect(page.getByRole("button")).toBeVisible();
  });

  test("should contain three heading tags", async ({ page }) => {
    await expect(page.getByRole("heading", { name: "-- years" })).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "-- months" })
    ).toBeVisible();
    await expect(page.getByRole("heading", { name: "-- days" })).toBeVisible();
  });

  test("should contain portfolio link", async ({ page }) => {
    await expect(page.getByRole("link")).toBeVisible();
  });
});

test.describe("Functionality", () => {
  test("should calculate correct age for past date", async ({ page }) => {
    await page.clock.setFixedTime(new Date(2024, 10, 20));

    await page.getByPlaceholder("DD").fill("01");
    await page.getByPlaceholder("MM").fill("01");
    await page.getByPlaceholder("YYYY").fill("2000");

    await page.getByRole("button").click();

    await expect(page.getByRole("heading", { name: "24 years" })).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "10 months" })
    ).toBeVisible();
    await expect(page.getByRole("heading", { name: "19 days" })).toBeVisible();
  });

  test("should show error for all empty fields", async ({ page }) => {
    await page.getByRole("button").click();

    const dayError = page.getByText("This field is required").nth(0);
    const monthError = page.getByText("This field is required").nth(1);
    const yearError = page.getByText("This field is required").nth(2);

    await expect(dayError).toBeVisible();
    await expect(monthError).toBeVisible();
    await expect(yearError).toBeVisible();
  });

  test("should show error for incorrect day", async ({ page }) => {
    await page.getByPlaceholder("DD").fill("32");
    await page.getByPlaceholder("MM").fill("01");
    await page.getByPlaceholder("YYYY").fill("2000");

    await page.getByRole("button").click();

    await expect(page.getByText("Must be a valid day")).toBeVisible();
  });

  test("should show error for incorrect month", async ({ page }) => {
    await page.getByPlaceholder("DD").fill("12");
    await page.getByPlaceholder("MM").fill("13");
    await page.getByPlaceholder("YYYY").fill("2000");

    await page.getByRole("button").click();

    await expect(page.getByText("Must be a valid month")).toBeVisible();
  });

  test("should show error for future date", async ({ page }) => {
    await page.evaluate(() => {
      const mockDate = new Date(2024, 11, 20);
      Date.now = () => mockDate.getTime();
    });

    await page.getByPlaceholder("DD").fill("12");
    await page.getByPlaceholder("MM").fill("12");
    await page.getByPlaceholder("YYYY").fill("2024");

    await page.getByRole("button").click();

    await expect(
      page.getByText("You have provided a future date")
    ).toBeVisible();
  });
});
