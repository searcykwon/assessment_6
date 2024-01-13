const { Builder, Browser, By, until } = require("selenium-webdriver");

let driver;

beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.CHROME).build();
});

afterEach(async () => {
  await driver.quit();
});

describe("Duel Duo tests", () => {
  test("page loads with title", async () => {
    await driver.get("http://localhost:8000");
    await driver.wait(until.titleIs("Duel Duo"), 1000);
  });

  test("displays the cards", async () => {
    await driver.get("http://localhost:8000");
    await driver.wait(until.titleIs("Duel Duo"), 1000);
    await driver.findElement(By.css("#draw")).click()

    const displaysCards = await driver.wait(until.elementLocated(By.css("#choices.container")));
    });

    test("adds card to duo", async () => {
    await driver.get("http://localhost:8000");
    await driver.wait(until.titleIs("Duel Duo"), 1000);
    const finalDuos = await driver.findElement(By.linkText("chooseBot(9)")).click();


    const addsCards = await driver.wait(until.elementLocated(By.css("#player-duo.container")));
    
    })

  test("see all bots", async () => {
    await driver.get("http://localhost:8000");
    await driver.wait(until.titleIs("Duel Duo"), 1000);
    await driver.findElement(By.css("#see-all")).click();

    const seeAll = await driver.wait(until.elementLocated(By.css("#all-bots")))

  })




});