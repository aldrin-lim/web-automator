const puppeteer = require('puppeteer');
const { url, username, password } = require('./config.json');
async function getPic() {
  const browser = await puppeteer.launch({ launch: "headless" });
  const page = await browser.newPage();
  await page.goto(url);
  await page.setViewport({width: 2000, height: 500})
  await page.type('#txtUsername', username );
  await page.type('#txtPassword', password );
  await page.click('#btnLogIn');
  
  await page.waitFor(15000);
  
  await page.screenshot({path: 'out.png'});
  
  await browser.close();

  console.log("done")
}

getPic();