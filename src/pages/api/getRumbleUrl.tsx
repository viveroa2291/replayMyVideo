import puppeteer from 'puppeteer';

const getRumbleUrl = async (url: string) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  await page.waitForSelector('.media-by-actions-button');

  const widgetsSelectorTitle = await page.$eval('.media-by-actions-button', (element) => element.textContent?.trim());
  console.log('What is inside here: ', widgetsSelectorTitle);

  await browser.close();

  return ''; // Return the title instead of an empty string
};

export default getRumbleUrl;