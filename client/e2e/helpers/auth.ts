import { Page } from '@playwright/test'

export const authenticateAsUser = async (user: User, page: Page) => {
  await page.goto('/')
  await page.locator("[name='username']").fill(user.username)
  await page.getByRole('button', { name: 'Sign In' }).click()

  // You can store the user's session state at this point if needed
}
