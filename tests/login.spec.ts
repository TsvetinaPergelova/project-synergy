import { test, expect } from "@playwright/test";

test("login page renders and has login button", async ({ page }) => {
  await page.goto("http://localhost:3000");
  // Adjust selectors/texts to match your actual UI
  await expect(page.getByRole("button", { name: /вход|login/i })).toBeVisible();
});

test("shows validation errors on empty login", async ({ page }) => {
  await page.goto("http://localhost:3000");
  await page.getByRole("button", { name: /вход/i }).click();
  await expect(
    page.getByText(/Потребителското име е задължително/i)
  ).toBeVisible();
  await expect(page.getByText(/Паролата е задължителна/i)).toBeVisible();
});
test("shows error on invalid login", async ({ page }) => {
  await page.goto("http://localhost:3000");
  await page.fill('input[id="userName"]', "wrong@example.com");
  await page.fill('input[id="password"]', "WrongPassword123");
  await page.getByRole("button", { name: /вход/i }).click();
  await expect(
    page.getByText(/login failed|грешни данни|invalid/i)
  ).toBeVisible();
});
test("successful login redirects to dashboard", async ({ page }) => {
  await page.goto("http://localhost:3000");
  await page.fill('input[id="userName"]', "ivan@example.com");
  await page.fill('input[id="password"]', "StrongPass123");
  await page.getByRole("button", { name: /вход/i }).click();
  await expect(page).toHaveURL(/dashboard/);

  await expect(page.getByRole("heading", { name: /dashboard/i })).toBeVisible();
});
