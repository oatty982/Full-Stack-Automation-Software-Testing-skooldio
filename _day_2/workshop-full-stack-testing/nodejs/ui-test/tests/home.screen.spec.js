import { test, expect } from "@playwright/test";

test(
  "Check Home Screen",
  {
    tag: ["@visual"],
  },
  async ({ page }) => {
    await page.goto("http://localhost:3000/");
    await expect(page).toHaveTitle("Home — Demo");

    // Snapshot screen
    // await expect(page).toHaveScreenshot();
    await expect(page).toHaveScreenshot({ maxDiffPixels: 100 });
  }
);