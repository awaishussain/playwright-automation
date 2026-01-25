import { Page, Locator } from '@playwright/test';

export async function getAutoHealingLocator(
  page: Page,
  selectors: string[]
): Promise<Locator> {

  for (const selector of selectors) {
    const locator = page.locator(selector);
    if (await locator.count() > 0) {
      return locator;
    }
  }

  throw new Error(`No valid locator found from: ${selectors.join(', ')}`);
}
