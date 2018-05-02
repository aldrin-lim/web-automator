const puppeteer = require('puppeteer');

async function getPic() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://fb.com');
  await page.setViewport({width: 2000, height: 500})
  await page.screenshot({path: 'out.png'});

  await browser.close();

  console.log("done")
}

getPic();