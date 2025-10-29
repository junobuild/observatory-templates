import { test, expect } from '@playwright/test';


test('checking the url', async ({page}) => {
  await page.goto('/')
  await expect(page).toHaveURL('http://localhost:3000/')
})

test('checking home page', async ({page}) => {
  await page.goto('/')
  await expect(page.getByRole('heading',{name: 'Welcome to React Email'})).toContainText('Welcome to React Email')
})

test('cheking for presence of notifications', async ({page}) => {
  await page.goto('/')
  await expect(page.locator('//h3')).toHaveText('notifications')
})

test('checking for presence of scripts', async ({page}) => {
  await page.goto('/')
  await page.locator('//h3').click()
  for (const element of await page.locator('span.truncate.w-\\[calc\\(100\\%\\-1\\.25rem\\)\\]').all()) {
  expect(element).toBeVisible()}
  })

test('checking for screenshot light mode', async ({page}) => {
  page.goto('/')
  await page.locator('//h3').click()
  await page.getByText('deposited-cycles').click()
  await page.waitForTimeout(1000)
  expect(await page.screenshot()).toMatchSnapshot(['screenshots','deposited-cycles.png'], {maxDiffPixels: 10})

  await page.getByText('failed-deposit-cycles').click()
  await page.waitForTimeout(1000)
  expect(await page.screenshot()).toMatchSnapshot(['screenshots','failed-deposit-cycles.png'], {maxDiffPixels: 10})
})
// test('checking for screenshot dark mode')


// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });
