import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://www.amazon.fr');
  await expect(page).toHaveTitle(/Amazon/);
  
  await page.getByRole('button', { name: 'Refuser' }).click();
  await expect(page.getByRole('form', { name: 'Cookies et choix publicitaires' })).toBeHidden()

  await page.getByRole('searchbox', { name: 'Rechercher Amazon.fr' }).click();
  await page.getByRole('searchbox', { name: 'Rechercher Amazon.fr' }).type('co-enzyme q10');
  await page.getByRole('button', { name: 'Go', exact: true }).click();
  // await expect(page.get

  await page.getByRole('link', { name: 'Appliquer le filtre Livraison' }).click();
  await page.getByText('Trier par:Mis en avant').click();
  await page.getByLabel('Prix : Ordre croissant').getByText('Prix : Ordre croissant').click();
  await page.getByRole('link', { name: 'Co-Enzyme Q10 200mg - 90' }).first().click();
  await page.locator('#a-autoid-0-announce').click();
  await page.getByLabel('2', { exact: true }).getByText('2').click();
  await page.getByRole('button', { name: 'Ajouter au panier', exact: true }).click();

});



