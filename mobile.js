const { chromium, devices } = require("playwright");
const iPhone = devices["iPhone 11"];

(async () => {
  const browser = await chromium.launch({ headless: false, slowMo: 500 });
  const context = await browser.newContext({
    ...iPhone,
    permissions: ["geolocation"],
    geolocation: { latitude: 19.432608, longitude: -99.132608 },
    locale: "en-US",
  });
  const page = await context.newPage();
  await page.goto("https://www.google.com/maps");
  await page.waitForTimeout(5000);
  await browser.close();
})();
