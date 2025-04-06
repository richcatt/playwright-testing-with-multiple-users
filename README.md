# Playwright Testing With Multiple Users

An example of how to use Playwright for testing a web application with multiple users.

## Running the sample project

### Prerequisites
- .NET 9+
- Node 22+
- NPM 9+

Install server dependencies
```bash
cd server
dotnet restore
```
Run the server
```bash
dotnet run
```
Install client dependencies
```bash
cd ../client
pnpm install
```
Run the client
```bash
pnpm run dev
```

### Running the tests
Ensure the application is running, then run the tests in a separate terminal window.

```bash
cd client
npx playwright test
```
