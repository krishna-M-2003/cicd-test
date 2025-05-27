import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';


test('User can log in successfully', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('a.hyder', '123456');
});