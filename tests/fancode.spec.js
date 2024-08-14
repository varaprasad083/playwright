const {test, expect} = require('@playwright/test');

// test("fancode", async({page})=>{
//     await page.goto("https://in.bookmyshow.com/explore/home/hyderabad")

//     await page.click("//img[@alt='Kalki 2898 AD']")

//     await  page.click("//div[@class='sc-qswwm9-8 goilWl']//div[@class='sc-1vmod7e-2 hhYlrx']")

//     await page.click("//li[1]//section[2]//div[1]")

    
// })

test("facebook",async({page})=>{

    await page.goto("https://www.facebook.com/login/device-based/regular/login/?login_attempt=1&lwv=120&lwc=1348092")

    await page.fill("#email","7989844665") 

    await page.fill("#pass","Prasad@123")

    await page.click("#loginbutton")

    // await page.waitForURL("https://www.facebook.com/")

    // await expect(page).toHaveTitle(/Facebook/)

    // await page.click("//*[name()='g' and contains(@mask,'url(#:R3ar')]//*[name()='image' and contains(@x,'0')]")

    // await page.click("//div[@data-nocookies='true']//div[@class='x1qjc9v5 x1q0q8m5 x1qhh985 xu3j5b3 xcfux6l x26u7qi xm0m39n x13fuv20 x972fbf x9f619 x78zum5 x1r8uery xdt5ytf x1iyjqo2 xs83m0k x1qughib xat24cr x11i5rnm x1mh8g0r xdj266r x2lwn1j xeuugli x4uap5 xkhd6sd xz9dl7a xsag5q8 x1n2onr6 x1ja2u2z']")


    // await page.close()
})

test("instagram", async({page})=>{

    await page.goto("https://www.instagram.com/")

    await page.fill("input[name='username']","varaprasadreddy931@gmail.com")

    await page.fill("input[name='password']","Prasad@123")
     
    await page.click("button[type='submit']")

    await page.waitForURL("https://www.instagram.com/")

    await expect(page).toHaveTitle("Instagram")



})

test("todo", async({page})=>{

    await page.goto("https://demo.playwright.dev/todomvc/#/")

    const newTodo = page.getByPlaceholder('What needs to be done?');

    // Create 1st todo.
   

     await page.fill("input[placeholder='What needs to be done?']","today session is dismissed ")
     await newTodo.press('Enter');

     await page.fill("input[placeholder='What needs to be done?']","today is sunday ")
     await newTodo.press('Enter');

     

     await page.fill("input[placeholder='What needs to be done?']","today is monday ")
     await newTodo.press('Enter');

     await page.click("(//button[@aria-label='Delete'])[2]")

})


test("flipkart", async({page})=>{

    await page.goto("https://www.flipkart.com/");

    // await expect(page).toHaveTitle("Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!")

    await page.click('text=Login');

    // await page.fill("input[type='text']","vara2@gmail.com")
    await page.fill("input[class='r4vIwl BV+Dqf']","vara2@gmail.com")

   await page.getByRole("button",{name:'Request OTP'}).click()

    await page.waitForTimeout(5000)
    
 


})

// test('stock items 5', async ({page}) => {
//   await page.goto("");
//   await expect(page.getByRole("listitem")
//     .filter({ hasNotText: 'Out of stock' }))
//     .toHaveCount(5)
// });

