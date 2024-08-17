const {test, expect}=require("@playwright/test");

test("OrangeHRM PIM", async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    
    await page.waitForTimeout(2000)
    await  expect(page).toHaveTitle("OrangeHRM")
    await page.getByPlaceholder("Username").fill("Admin")
    await page.getByPlaceholder("Password").fill("admin123")
    await page.getByRole("button", {name:'Login'}).click()
    
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList')
    // await page.getByRole('link',{name:'PIM'}).click()
    await page.getByPlaceholder('Type for hints...').first().fill('thunder bolt');
    await page.getByRole('textbox').nth(2).fill('0409');
    await page.getByRole('button',{name:'Search'}).click()
    await page.getByRole('button', {name:" Add "}).click()
    await page.waitForURL('https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee')
    await page.getByPlaceholder("First Name").fill("vara")
    await page.getByPlaceholder("Middle Name").fill('Prasad')
    await page.getByPlaceholder('Last Name').fill('Saragada')
    await page.getByRole('button',{name:"save"}).click()
})