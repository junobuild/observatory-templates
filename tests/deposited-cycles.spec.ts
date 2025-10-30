import { test, expect } from "@playwright/test";
import { TemplatePage } from "./page-objects/template";

const title = "deposited-cycles.tsx";
const path = "/preview/notifications/deposited-cycles";

test("should contains content", async ({ page }) => {
  const template = await TemplatePage.init({ page, title, path });

  await template.assertText({
    text: "0.01 T Cycles have been deposited on your Satellite.",
  });
  await template.assertText({ text: "Module: Satellite (Hello)" });
  await template.assertText({ text: "Amount: 0.01 T Cycles" });
  await template.assertText({ text: "Time: September 7, 2022 at 10:58 AM" });

  const url =
    "https://console.juno.build/satellite/?s=ucnx3-aqaaa-aaaal-ab3ea-cai";

  await template.assertLink({ url, text: "View your module" });
  await template.assertLink({ url, text: url });
});

test("deposited-cycles layout", async ({ page }) => {
  await TemplatePage.init({ page, title, path });

  await expect(page).toHaveScreenshot(`deposited-cycles.png`, {
    fullPage: true,
  });
});
