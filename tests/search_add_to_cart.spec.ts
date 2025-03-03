import { test, expect } from "@playwright/test";
import { LandingPage } from "../page_object/landing_page";
import { ResultPage } from "../page_object/result_page";
import { ProductPage } from "../page_object/product_page";
import { CartPage } from "../page_object/cart_page";

test("user can search for a product and add it to the cart", async ({
  page,
}) => {
  const landingPage = new LandingPage(page);
  const result_page = new ResultPage(page);
  const product_page = new ProductPage(page);
  const cart_page = new CartPage(page);

  let product = "co-enzyme q10";
  let product_name = "Naturathéra CO-ENZYME Q10"
  let qty = "2";
  let product_price = "19.00"

  await landingPage.dismissCookies();
  await landingPage.searchForProduct(product);
  await result_page.refiningSearch(product, product_name);
  await product_page.addToCart(product_name, qty);
  await cart_page.checkCart(product_name, qty, product_price);
});
