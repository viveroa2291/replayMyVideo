import puppeteer from 'puppeteer';

const getSnapchatUrl = async (): Promise<string> => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.snapchat.com/add/adx305');

  await page.waitForSelector('[data-testid="subscribersCountText"]');  
  const rootContent = await page.$eval('[data-testid="subscribersCountText"]', element => element.textContent);

  console.log('What is inside here: ', rootContent);

  await browser.close();

  return rootContent?.trim() ?? 'Hello'; // Return an empty string if textContent is null or undefined
};

export default getSnapchatUrl;