import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class InventoryPage extends BasePage {
  readonly pageTitle: Locator;
  readonly inventoryItems: Locator;

  constructor(page: Page) {
    super(page);

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
}
