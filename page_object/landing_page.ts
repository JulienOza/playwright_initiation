import { expect, type Locator, type Page } from "@playwright/test";

export class LandingPage {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  async dismissCookies() {
    await this.page.goto("https://www.amazon.fr");
    await expect(this.page).toHaveTitle(/Amazon/);
    await this.page.getByRole("button", { name: "Refuser" }).click();
    await expect(
      this.page.getByRole("form", { name: "Cookies et choix publicitaires" })
    ).toBeHidden();
  }

  async searchForProduct(product: string) {
    await this.page.getByRole('searchbox', { name: 'Rechercher Amazon.fr' }).click();
    await this.page.getByRole('searchbox', { name: 'Rechercher Amazon.fr' }).fill(product);
    await this.page.getByRole('button', { name: 'Go', exact: true }).click();
}
}