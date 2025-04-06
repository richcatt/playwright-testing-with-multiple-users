import * as fs from 'fs'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'

const filename = fileURLToPath(import.meta.url)

export const testUsers: User[] = []

const testDataPath = resolve(dirname(filename), '../../../testData.json')

if (fs.existsSync(testDataPath)) {
  try {
    const rawUsersData = fs.readFileSync(testDataPath, 'utf8')
    testUsers.push(...JSON.parse(rawUsersData) as User[])
  } catch (error) {
    console.error('Error reading or parsing testData.json:', error)
    process.exit(1)
  }
}
