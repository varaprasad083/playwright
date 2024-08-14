const {test, expect} = require("@playwright/test");


test("mocks a fruit and doesn't call api", async ({ page }) => {

    // Mock the api call before navigating
  
    await page.route('*/**/api/v1/fruits', async route => {
  
    
  
       const json = [{ name: 'Vara Prasad', id: 3 }];
  
      await route.fulfill({ json });
  
    });
  
    // Go to the page
  
    await page.goto('https://demo.playwright.dev/api-mocking');
   
    // Assert that the Strawberry fruit is visible
  
    
    await expect(page.getByText('Vara Prasad')).toBeVisible();
  
  });
  
  
  test('gets the json from api and adds a new fruit', async ({ page }) => {
    // Get the response and add to it
    await page.route('*/**/api/v1/fruits', async route => {
      const response = await route.fetch();
      const json = await response.json();
     
      json.push({ name: 'vara', id: 100 });
  
      await route.fulfill({ response, json, });
    });
  
    // Go to the page
    await page.goto('https://demo.playwright.dev/api-mocking');
  
    // Assert that the new fruit is visible
    await expect(page.getByText('vara', { exact: true })).toBeVisible();
  });

  
test("placeholder", async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.fill('#name', 'vara prasad');

    await page.fill("#email", 'varaprasad@gmail.com');
    await page.fill("#phone", '765433790');

    await page.fill("#textarea" ,"flat no:23/4, dilshuknagar roadno:23 hyderabad, telagana")

    await page.locator("#male").click()

    await page.locator("#sunday").click()
    await page.locator("#tuesday").click()
    await page.locator("#friday").click()

    await page.locator("#country").selectOption('india')
    await page.locator("#colors").selectOption('blue')

    await page.locator(".hasDatepicker").fill("09/23/2024")

    

    await page.waitForTimeout(3000)
})


test('filtering', async ({page}) => {
  await page.goto("https://demo.opencart.com/en-gb/catalog/smartphone");
  await page.locator(".list-group-item")
    .filter({ hasText: 'Tablets (1)' }).click()

     await page.locator(".fa-solid.fa-shopping-cart").click()

});
 
