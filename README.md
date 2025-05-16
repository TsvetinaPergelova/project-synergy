This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Running the server

```bash
node -r dotenv/config server.js dotenv_config_path=.env.local
```

## Installing playwright testing

```bash
npm init playwright@latest
```

This command will guide you through the setup and install all necessary Playwright dependencies for testing.

## Running the test

```bash
npx playwright test
```

## HTML Test Reports

```bash
npx playwright show-report
```

## Running the test in UI Mode

```bash
npx playwright test --ui
```

To learn more about Playwright testing, take a look at the following resources:

- [Playwright](https://playwright.dev/) - get started with Playwright
- [Next.jsDocumentation](https://nextjs.org/docs/pages/guides/testing/playwright) -how to set up Playwright with Next.js
