import puppeteer from 'puppeteer';

const getTwitterUrl = async (url: string) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://publish.twitter.com/');

  await page.waitForSelector('#app-root');
  const htmlContent = await page.content();
  // console.log('HTML content of the page:', htmlContent);

  try {
    const inputField = await page.waitForSelector('WidgetQuery-input', { visible: true });
    if (!inputField) {
      console.log('Input field not found');
      return null;
    }

    await inputField.type(url);
    console.log('Typed URL into input field');
    
    // const widgetQueryButton = await page.$('WidgetQuery-button'); u-hiddenVisually
    const widgetQueryButton = await page.$('u-hiddenVisually'); 
    if (!widgetQueryButton) {
      console.log('Widget query button not found');
      return null;
    }

    await widgetQueryButton.click();
    console.log('Clicked widget query button');

    const videoSelectorButton = await page.$('.Icon--videoSelector');
    if (!videoSelectorButton) {
      console.log('Video selector button not found');
      return null;
    }

    await videoSelectorButton.click();
    console.log('Clicked video selector button');

    // Wait for the second button to be clicked and the element to be generated
    await page.waitForFunction(() => {
      return document.querySelector('.EmbedCode-code') !== null;
    });
    console.log('Embed code element generated');

    const embedCodeElement = await page.$('.EmbedCode-code');
    if (embedCodeElement) {
      const embedCodeText = await page.evaluate(embedCodeElement => embedCodeElement.textContent, embedCodeElement);
      console.log('Embed Code:', embedCodeText);
      return embedCodeText;
    } else {
      console.log('EmbedCodeElement not found');
    }
  } catch (error) {
    console.log('Error:', error);
  } finally {
    await browser.close();
  }
};

export default getTwitterUrl;