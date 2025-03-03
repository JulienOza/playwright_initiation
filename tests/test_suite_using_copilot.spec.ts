import { test, expect } from "@playwright/test";
import { LandingPage } from "../page_object/landing_page";
import { ResultPage } from "../page_object/result_page";
import { ProductPage } from "../page_object/product_page";
import { CartPage } from "../page_object/cart_page";

// All tests are for amazon.fr
 
// Test case 1 : Verify navigation to amazon.fr
// Step 1: Open the browser and navigate to the amazon.fr 
// Expected Result: Verify that the current URL is amazon.fr
test("verify navigation to amazon.fr", async ({ page }) => {
    await page.goto("https://www.amazon.fr");
    expect(page.url()).toBe("https://www.amazon.fr/");
  });
  
  
  // Test case 2 : Verify cookie acceptance
  // Step 1: Open the browser and navigate to the amazon.fr
  // Step 2: Accept cookies
  // Expected Result: Verify that the cookies are accepted (the button disappears after the click)
  test("verify cookie acceptance", async ({ page }) => {
    await page.goto("https://www.amazon.fr");
    await page.getByRole('button', { name: 'Refuser' }).click();
    expect(page.locator('button:has-text("Accepter les cookies")')).not.toBeVisible();
  });
  
  // Test case 3 : Verify product search
  // Step 1: Open the browser and navigate to the amazon.fr and Close the pop-up
  // Step 2: Search for "sneakers"
  // Expected Result: Verify that the search results are displayed
  test("verify product search", async ({ page }) => {
    await page.goto("https://www.amazon.fr");
    await page.getByRole('button', { name: 'Refuser' }).click();
    await page.fill('input[name="field-keywords"]', "sneakers");
    await page.click('input[type="submit"]');
    await expect(page).toHaveTitle(/sneakers/i);
  });
  
  // Test case 4 : Verify selection of the first product
  // Step 1: Navigate to amazon.fr, perform the search
  // Step 2: Select the first product
  // Expected Result: Verify that the product page is displayed (e.g., check the product title element)
  test("verify selection of the first product", async ({ page }) => {
    await page.goto("https://www.amazon.fr");
    await page.getByRole('button', { name: 'Refuser' }).click();
    await page.fill('input[name="field-keywords"]', "baskets");
    await page.click('input[type="submit"]');
    await page.click('a.a-link-normal.a-text-normal >> nth=2');
    await expect(page).toHaveTitle(/basket/i);
  }); 
  
  
  // Test case 5 : Verify adding product to cart
  // Step 1: Navigate to amazon.fr, perform the search and select the product
  // Step 2: Add to cart
  // Expected Result: Verify that the product is added to the cart (e.g., check for a confirmation message)
  test("verify adding product to cart", async ({ page }) => {
    await page.goto("https://www.amazon.fr");
    await page.getByRole('button', { name: 'Refuser' }).click();
    await page.fill('input[name="field-keywords"]', "sneakers");
    await page.click('input[type="submit"]');
    await page.click('a.a-link-normal.a-text-normal >> nth=2');
    await page.click('input#add-to-cart-button');
    await expect(page.getByRole('heading', { name: 'Ajouté au panier' })).toBeVisible();
  });
  
  // Test case 6 : Verify accessing the cart
  // Step 1: Navigate to amazon.fr, perform the search and add the product to the cart
  // Step 2: Go to the cart
  // Expected Result: Verify that the product is present in the cart
  test("verify accessing the cart", async ({ page }) => {
    const landingPage = new LandingPage(page);
    const result_page = new ResultPage(page);
    const product_page = new ProductPage(page);
    const cart_page = new CartPage(page);
  
    let product = "souris sans fil";
    let product_name = "Generic Souris sans fil grise 2,4 G sans bruit avec récepteur USB Souris d'ordinateur portable pour PC"; // Remplacez par le nom exact du produit
    let qty = "1";
    let product_price = "2.53" 
  
    await page.goto("https://www.amazon.fr");
    await landingPage.dismissCookies();
    await landingPage.searchForProduct(product);
    await result_page.refiningSearch(product, product_name);
    await product_page.addToCart(product_name, qty);
    await cart_page.checkCart(product_name, qty, product_price);
  });
  // Test case 7 : Verify the checkout process
  // Step 1: Navigate to amazon.fr, perform the search, add the product to the cart and go to the cart
  // Step 2: Proceed to checkout
  // Expected Result: Verify that the checkout process is initiated (e.g., check for the presence of the checkout page)
  