import { expect, type Locator, type Page } from "@playwright/test";

export class ResultPage {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  async refiningSearch(product: string, product_name: string) {
    await expect(this.page).toHaveTitle(new RegExp(product, "i"));
    await this.page
      .getByRole("link", { name: "Appliquer le filtre Livraison" })
      .click();
    await this.page.getByText("Trier par:Mis en avant").click();
    await this.page
      .getByLabel("Prix : Ordre croissant")
      .getByText("Prix : Ordre croissant")
      .click();
    await this.page
      .getByRole("link", { name: product_name }).first()
      .click();
  }
}

