import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class InventoryPage extends BasePage {
  readonly pageTitle: Locator;
  readonly inventoryItems: Locator;
  readonly firstAddToCartButton: Locator;
  readonly cartIcon: Locator;


  constructor(page: Page) {
    super(page);
    this.firstAddToCartButton = page.locator('.inventory_item button').first();
    this.cartIcon = page.locator('.shopping_cart_link');


    this.pageTitle = page.getByText('Products');
    this.inventoryItems = page.locator('.inventory_item');
  }

  async assertUserIsOnInventoryPage(): Promise<void> {
    await expect(this.page).toHaveURL(/inventory.html/);
    await expect(this.pageTitle).toBeVisible();
  }

  async getInventoryCount(): Promise<number> {
    return await this.inventoryItems.count();
  }

  async addFirstItemToCart(): Promise<void> {
  await this.firstAddToCartButton.click();
}

  async goToCart(): Promise<void> {
  await this.cartIcon.click();
}

}
