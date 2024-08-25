import puppeteer from 'puppeteer';

const getRumbleUrl = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://publish.twitter.com/');

  await page.waitForSelector('#app-root');

 // const appRootHtml = await page.$eval('#app-root', (element) => element.outerHTML);

  const widgetsSelectorTitle = await page.$eval('.WidgetsSelector-title', (element) => element.textContent);
  console.log('What is inside here: ', widgetsSelectorTitle);

  await browser.close();

  return '';
};

export default getRumbleUrl;