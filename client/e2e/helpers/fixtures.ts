import { test as base } from '@playwright/test'

export type TestOptions = {
  user: User
}

export const test = base.extend<TestOptions>({
  page: async ({ page, baseURL }, use) => {
    baseURL && (await page.goto(baseURL))
    await use(page)
  },
  user: [
    {
      name: '',
      description: '',
      username: '',
      password: '',
      permissions: [''],
    },
    { option: true },
  ],
})

export { expect } from '@playwright/test'
