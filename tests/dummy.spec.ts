import { expect, test } from "@playwright/test";

// TODO: to be removed
test("dummy test", async ({ page }) => {
  await page.goto("https://juno.build");

  await expect(page).toHaveScreenshot(`dummy.png`, {
    fullPage: true,
  });
});
