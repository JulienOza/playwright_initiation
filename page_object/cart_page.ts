import { expect, type Locator, type Page } from "@playwright/test";

export class CartPage {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  async checkCart(product_name: string, qty: string, product_price: string) {
    await expect(this.page).toHaveTitle(/Panier/);
    await expect(
      this.page
        .getByRole("link", { name: new RegExp(product_name, "i") })
        .first()
    ).toBeVisible();
    await expect(this.page.locator("#sc-subtotal-label-buybox")).toContainText(
      new RegExp(`${qty} article`, "i")
    );
    const total = (parseInt(qty, 10) * parseFloat(product_price)).toFixed(2);
    const formattedTotal = total.replace('.', ',');

    await expect(
      this.page.locator("#sc-subtotal-amount-activecart")
    ).toContainText(new RegExp(`\\s?${formattedTotal}\\s?€`, "i"));
  }
}