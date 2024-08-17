const {test, expect}=require("@playwright/test");

test.beforeEach("OrangeHRM1 LOgin", async ({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await  expect(page).toHaveTitle("OrangeHRM")
    await page.getByPlaceholder("Username").fill("Admin")
    await page.getByPlaceholder("Password").fill("admin123")
    await page.getByRole("button", {name:'Login'}).click()
})


test("OrangeHRM2 assignLeave", async({page})=>{

    await page.locator("button[title='Assign Leave']").click()
    await page.waitForTimeout(3000)
    await page.locator('form i').first().click();
    await page.getByRole('option', { name: 'CAN - Personal' }).click();
  
})

test("orangehrm3 assignleave",async({page})=>{
    await page.locator("button[title='Assign Leave']").click()
    await page.locator('form i').nth(1).click();
    await page.getByText('16').click();
    await page.locator('form i').nth(2).click();
    await page.getByText('21').click();
})

test("orangehrm4 assignleave",async({page})=>{
    await page.locator("button[title='Assign Leave']").click()
    await page.locator('form i').nth(1).click();
    await page.getByText('16').click();
    await page.locator('form i').nth(2).click();
    await page.getByText('21').click();
    await page.locator('form i').nth(3).click();
     await page.getByRole('option',{name:'End Day Only'}).click()
    await page.locator('form i').nth(4).click();
    await page.getByRole('option',{name:'Half Day - Afternoon'}).click()
})

test("orangehrm5 assignLeave",async({page})=>{
    await page.locator("button[title='Assign Leave']").click()
    await page.locator(".oxd-textarea.oxd-textarea--active.oxd-textarea--resize-vertical").fill("leave is for my personal reasons")
    await page.getByRole('button',{name:'Assign'}).click()
})






