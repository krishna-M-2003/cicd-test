import { Page } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
  
    constructor(page: Page) {
      this.page = page;
    }

    async goto() {
        await this.page.goto('https://apps4x.web.app/#/login');
      }

    async login(username: string, password: string) {
        await this.page.fill('#signin-username', username);
        await this.page.fill('#signin-password', password);
        await this.page.click('#Login');
    }
}