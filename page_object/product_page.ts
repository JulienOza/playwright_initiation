import { expect, type Locator, type Page } from "@playwright/test";

export class ProductPage {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  async addToCart(product_name: string, qty: string) {
    await expect(this.page).toHaveTitle(new RegExp(product_name, "i"));
    await this.page.locator('#a-autoid-0-announce').click();
    await this.page.getByLabel(qty, { exact: true }).getByText(qty).click();
    await this.page.getByRole('button', { name: 'Ajouter au panier', exact: true }).click();
    await this.page.locator('#sw-gtc').getByRole('link', { name: 'Aller au panier' }).click();
  }

}