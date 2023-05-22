const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto("https://www.cnn.com");

  await page.screenshot({ path: "screenshot.png" });

  const subTitle = await page.$(
    "body > div.layout__content-wrapper.layout-homepage__content-wrapper > section.layout__wrapper.layout-homepage__wrapper > section > div > section > div > div > div > div.zone.zone--t-light.zone-2-observer > div > div.zone__items.layout--wide-left-balanced-2 > div:nth-child(1) > div > div.stack__items > div > div.container__title.container_lead-package__title.container__title--emphatic.hover.container__title--emphatic-size-l2 > a > h2"
  );
  await subTitle.screenshot({ path: "subTitle.png" });

  await page.screenshot({ path: "fullpage.png", fullPage: true });

  await browser.close();
})();
