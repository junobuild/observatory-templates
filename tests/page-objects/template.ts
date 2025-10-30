import { expect, FrameLocator, Page } from "@playwright/test";

export interface TemplatePageParams {
  page: Page;
  path: `/${string}`;
  title: string;
}

export class TemplatePage {
  private readonly page: Page;
  private readonly frame: FrameLocator;

  private constructor({
    page,
    frame,
  }: Pick<TemplatePageParams, "page"> & { frame: FrameLocator }) {
    this.page = page;
    this.frame = frame;
  }

  static async init({
    title,
    path,
    page,
  }: TemplatePageParams): Promise<TemplatePage> {
    await page.goto(path, { waitUntil: "domcontentloaded" });

    const frame = page.frameLocator(`iframe[title="${title}"]`);

    return new TemplatePage({ page, frame });
  }

  async assertText({ text }: { text: string }) {
    await expect(this.frame.getByText(text, { exact: true })).toBeVisible();
  }

  async assertLink({ url, text }: { url: string; text: string }) {
    await expect(
      this.frame.locator(`a[href="${url}"]`, { hasText: text }),
    ).toHaveCount(1);
  }
}
