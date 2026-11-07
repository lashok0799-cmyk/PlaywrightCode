import {expect , test}  from '@playwright/test';
import { faker } from '@faker-js/faker';

test ('Simple Login function', async ({page})=>{


    await page.goto('https://gmail.com');
    await page.getByRole('textbox',{name:"Email or phone"}).fill("lashok0799@gmail.com");
    await page.getByRole('button',{name:"Next"}).click();
    await page.getByRole('textbox',{name:"Enter your password"}).fill("2LOGIN@man");
    await page.getByRole('button',{name:"Next"}).click();
    let Link_text = await page.getByText("strong");
    await page.goto('${Link_test}').waitForLoadState('networkfile');



    
    
});