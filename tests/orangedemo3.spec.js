const {test, expect}=require("@playwright/test");

test.beforeEach("OrangeHRM1 Login", async({page})=>{
await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    
await page.waitForTimeout(2000)
await  expect(page).toHaveTitle("OrangeHRM")
await page.getByPlaceholder("Username").fill("Admin")
await page.getByPlaceholder("Password").fill("admin123")
await page.getByRole("button", {name:'Login'}).click()
})

test("OrangeHRM2 PIM", async({page})=>{
    
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList')
    await page.getByPlaceholder('Type for hints...').first().fill('thunder bolt');
    await page.getByRole('textbox').nth(2).fill('0409');
    await page.getByRole('button',{name:'Search'}).click()
    await page.getByRole('button', {name:" Add "}).click()
   
})

test("OrangeHRM3 PIM", async({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee')
    await page.getByPlaceholder("First Name").fill("vara")
    await page.getByPlaceholder("Middle Name").fill('Prasad')
    await page.getByPlaceholder('Last Name').fill('Saragada')
    await page.getByRole('button',{name:"save"}).click()
})

test("OrangeHRM4 PIM", async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewDefinedPredefinedReports')
    await page.getByPlaceholder("Type for hints...").fill("something is better than nothing")
    await page.getByRole("button", {name:"Search"})
})
test("OrangeHRM5 PIM",async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/pim/definePredefinedReport')
    await page.getByPlaceholder("Type here ...").fill('the pair of rewinder get main')
    await page.locator('form i').first().click();
    await page.getByRole('option', { name: 'Education' }).click();
    await page.locator('form i').nth(2).click();
    await page.getByRole('option', { name: 'Current Employees Only' }).click();

})