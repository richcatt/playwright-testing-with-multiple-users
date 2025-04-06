import { test, expect } from '../helpers/fixtures'
import { Page } from '@playwright/test'
import { authenticateAsUser } from '../helpers/auth'

let page: Page

test.beforeAll('authenticate', async ({ browser, user }) => {
  // We're using a new page context for each user so there's no need to sign out
  page = await browser.newPage()
  await authenticateAsUser(user, page)
})

test('shows welcome message for user', async ({ user }) => {
  await expect(page.locator('h1')).toHaveText(`Welcome ${user.name}`)
})

test('has correct access', async ({ user }) => {
  if (user.permissions.includes('permission1')) {
    await expect(page.getByText('Permission 1 content')).toBeVisible()
  }
  if (user.permissions.includes('permission2')) {
    await expect(page.getByText('Permission 2 content')).toBeVisible()
  }
  if (!user.permissions.length) {
    await expect(page.getByText('You do not have permission to view any content')).toBeVisible()
  }
})
