import { test, expect } from '../helpers/fixtures'
import { Page } from '@playwright/test'
import { authenticateAsUser } from '../helpers/auth'

let page: Page

test.beforeAll('authenticate', async ({ browser, user }) => {
  page = await browser.newPage()
  await authenticateAsUser(user, page)
})


test('has username', async ({ page, user }) => {

  console.log(user)
  await expect(page).toHaveTitle(`Welcome ${user.name}`);
})

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');
//
//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();
//
//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });
