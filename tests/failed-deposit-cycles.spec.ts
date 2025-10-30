import { test, expect } from "@playwright/test";
import { TemplatePage } from "./page-objects/template";

const title = "failed-deposit-cycles.tsx";
const path = "/preview/notifications/failed-deposit-cycles";

test("should contains content", async ({ page }) => {
  const template = await TemplatePage.init({ page, title, path });

  await template.assertText({
    text: "An attempt to deposit cycles on your Satellite has failed!",
  });
  await template.assertText({ text: "Module: Satellite (Hello)" });
  await template.assertText({ text: "Time: September 7, 2022 at 10:58 AM" });

  const url =
    "https://console.juno.build/satellite/?s=ucnx3-aqaaa-aaaal-ab3ea-cai";

  await template.assertLink({ url, text: "View your module" });
  await template.assertLink({ url, text: url });
});

test("deposited-cycles layout", async ({ page }) => {
  await TemplatePage.init({ page, title, path });

  await expect(page).toHaveScreenshot(`failed-deposit-cycles.png`, {
    fullPage: true,
  });
});
