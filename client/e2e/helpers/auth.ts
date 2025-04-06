import { Page } from '@playwright/test'

export const authenticateAsUser = async (user: User, page: Page) => {
  const { username } = {
    username: user.username,
  }

  await page.goto('/')
  await page.getByLabel('Username').fill(username)
  await page.getByRole('button', { name: 'Sign In' }).click()

  await page.waitForURL('/dashboard')

  // End of authentication steps.
  // await page.context().storageState({ path: `../playwright/.auth/${user.Username}.json` })
}
