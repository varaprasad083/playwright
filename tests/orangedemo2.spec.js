const {test, expect}=require("@playwright/test");

test.beforeEach("OrangeHRM Login",async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
  
    await  expect(page).toHaveTitle("OrangeHRM")
    await page.getByPlaceholder("Username").fill("Admin")
    await page.getByPlaceholder("Password").fill("admin123")
    await page.getByRole("button", {name:'Login'}).click()

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/viewCandidates")
})

test("OrangeHRM Recuirment1",async({page})=>{
    
    

    await page.locator('.oxd-select-text--after > .oxd-icon').first().click();
    await page.getByText('Chief Executive Officer').click();

  

 
})

test("OrangeHRM Recuirment2",async({page})=>{
    
    await page.locator('form i').nth(1).click();
    await page.getByRole('option', { name: 'QA lead' }).click();

})

test("OrangeHRM Recuirment3",async({page})=>{
 
    await page.locator('form i').nth(3).click();
    await page.getByRole('option', { name: 'Application Initiated' }).click();

})

test("OrangeHRM Recuirment4",async({page})=>{
    await page.getByPlaceholder('Enter comma seperated words...').fill('nothing is better');
    await page.locator('.oxd-date-input > .oxd-icon').first().click();
    await page.getByText('19').click();
    await page.locator('form i').nth(5).click();
    await page.getByText('21').click();
    
})

test("OrangeHRM Recuirment5",async({page})=>{
await page.locator('div:nth-child(3) > .oxd-grid-4 > .oxd-grid-item > .oxd-input-group > div:nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click();
await page.getByRole('option', { name: 'Manual' }).click();
await page.getByRole('button', { name: 'Search' }).click();
})