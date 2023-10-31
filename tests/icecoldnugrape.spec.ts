import { test, expect } from '@playwright/test';

test('smoke test', async ({ page }) => {
  await page.goto('http://www.icecoldnugrape.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/icecoldnugrape/);

  // Click the "My Collection" link.
  await page.getByRole('link', { name: 'My Collection' }).click();

  // await expect(page).toHaveTitle(/icecoldnugrape.com\/myCollection/);
  const total = page.getByText('Total: 250');
  await expect(total).toBeVisible();
});
