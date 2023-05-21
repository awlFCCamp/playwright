const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch({ headless: false, slowMo: 500 });
  const page = await browser.newPage();
  await page.goto("https://www.apronus.com/music/lessons/unit01.htm");
  //click on the keynotes
  await page.click("#t1 > table > tr:nth-child(1) > td:nth-child(1) > button");
  await page.click("#t1 > table > tr:nth-child(2) > td:nth-child(7) > button");
  await page.click("#t1 > table > tr:nth-child(1) > td:nth-child(16) > button");
  await page.click("#t2 > table > tr:nth-child(1) > td:nth-child(3) > button");
  await page.click("#t1 > table > tr:nth-child(3) > td:nth-child(9) > button");
  await page.click("#t1 > table > tr:nth-child(3) > td:nth-child(10) > button");
  await page.click("#t1 > table > tr:nth-child(6) > td:nth-child(12) > button");
  await browser.close();
})();
