import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://192.168.176.215:8080/corms/dist/#/web');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('tratest14');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('system123#');
  await page.locator('#cabSelect').selectOption('tratraining');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByText('File Admin TRA').nth(1).click();
  await page.getByText('File Admin TRA').nth(1).dblclick();
  await page.getByText('Attachment', { exact: true }).click();
  await page.getByRole('button', { name: 'Add Attachment' }).click();
  await page.getByText('Browse from RMS').click();
  await page.getByRole('cell', { name: 'a demo', exact: true }).first().click();
  await page.getByRole('cell', { name: 'testing' }).first().click();
  await page.getByRole('cell', { name: 'testing V11' }).first().click();
  await page.getByRole('cell', { name: 'RmsWebApiUser' }).first().click();
  await page.getByRole('button', { name: 'Yes' }).click()
await new Promise(resolve => setTimeout(resolve, 20000));

});
