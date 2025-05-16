import { test, expect } from "@playwright/test";

test("register page renders and has submit button", async ({ page }) => {
  await page.goto("http://localhost:3000/register");
  // Check for the registration form heading
  await expect(
    page.getByRole("heading", { name: /регистрация на нов потребител/i })
  ).toBeVisible();
  // Check for the submit button
  await expect(
    page.getByRole("button", { name: /изпратете искане за регистрация/i })
  ).toBeVisible();
});

test("shows validation errors for required fields", async ({ page }) => {
  await page.goto("http://localhost:3000/register");
  await page
    .getByRole("button", { name: /изпратете искане за регистрация/i })
    .click();
  await expect(page.getByText(/ЕГН е задължително поле/i)).toBeVisible();
  await expect(
    page.getByText(/Името на кирилица е задължително/i)
  ).toBeVisible();
  // ...add checks for other required fields
});
test("shows error when passwords do not match", async ({ page }) => {
  await page.goto("http://localhost:3000/register");
  // Fill all required fields...
  await page.fill('input[id="password"]', "StrongPass123");
  await page.fill('input[id="repeatPassword"]', "WrongPass123");
  await page
    .getByRole("button", { name: /изпратете искане за регистрация/i })
    .click();
  await expect(page.getByText(/Паролите не съвпадат/i)).toBeVisible();
});
test("successful registration flow", async ({ page }) => {
  await page.goto("http://localhost:3000/register");
  await page.fill('input[id="egn"]', "8701206763");
  await page.fill('input[id="nameCyrillic"]', "Иван Иванов");
  await page.fill('input[id="nameLatin"]', "Ivan Ivanov");
  await page.fill('input[id="email"]', "ivan@example.com");
  await page.fill('input[id="phone"]', "0888123456");
  await page.fill('textarea[id="address"]', "София, ул. Пример 1");
  await page.fill('input[id="username"]', "ivan_ivanov");
  await page.fill('input[id="password"]', "StrongPass123");
  await page.fill('input[id="repeatPassword"]', "StrongPass123");
  await page
    .getByRole("button", { name: /изпратете искане за регистрация/i })
    .click();
});

test("registers a new user and then logs in", async ({ page }) => {
  // Unique user for each run
  const uniqueId = Date.now();
  const email = `testuser${uniqueId}@example.com`;
  const username = `testuser${uniqueId}`;

  // Go to register page and fill the form
  await page.goto("http://localhost:3000/register");
  await page.fill('input[id="egn"]', "8701206763");
  await page.fill('input[id="nameCyrillic"]', "Иван Иванов");
  await page.fill('input[id="nameLatin"]', "Ivan Ivanov");
  await page.fill('input[id="email"]', email);
  await page.fill('input[id="phone"]', "0888123456");
  await page.fill('textarea[id="address"]', "София, ул. Пример 1");
  await page.fill('input[id="username"]', username);
  await page.fill('input[id="password"]', "StrongPass123");
  await page.fill('input[id="repeatPassword"]', "StrongPass123");
  await page
    .getByRole("button", { name: /изпратете искане за регистрация/i })
    .click();

  // Optionally, check for a success message or redirect
  await expect(
    page.getByText(/успешна регистрация|registration successful/i)
  ).toBeVisible();

  // Go to login page
  await page.goto("http://localhost:3000/");
  await page.fill('input[id="userName"]', username);
  await page.fill('input[id="password"]', "StrongPass123");
  await page.getByRole("button", { name: /вход/i }).click();
});
