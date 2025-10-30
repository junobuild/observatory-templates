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

test('checking for presence of mails', async ({page}) => {
  await page.goto('/')
  await page.locator('//h3').click()
  for (const element of await page.locator('span.truncate.w-\\[calc\\(100\\%\\-1\\.25rem\\)\\]').all()) {
  expect(element).toBeVisible()}
  })

test('checking for screenshot light mode', async ({page}) => {
  page.goto('/')
  await page.locator('//h3').click()
  await page.getByText('deposited-cycles').click()
  await page.locator('#layer2')
  await expect(page).toHaveScreenshot('deposited-cycles.png')

  await page.getByText('failed-deposit-cycles').click()
  await page.locator('#layer2')
  await expect(page).toHaveScreenshot('failed-deposit-cycles.png')
})

