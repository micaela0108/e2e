const puppeteer = require('puppeteer');         // Require Puppeteer module

const url = "https://prototype2022-demo.web.app/"; // Set website you want to screenshot
const sites = require("./sites.json") 
const ACTIVE  = 1;
const INACTIVE = 0;
const Screenshot = async (uri,file) => {                // Define Screenshot function
    const browser = await puppeteer.launch({headless: true,userDataDir: "chrome1"});    // Launch a "browser"

    const page = await browser.newPage();        // Open a new page

    await page.goto(uri);                        // Go to the website

    await page.screenshot({                      // Screenshot the website using defined options

        path: "./"+file,                   // Save the screenshot in current directory

        fullPage: true                              // take a fullpage screenshot

    });

    await page.close();                           // Close the website

    await browser.close();                        // Close the browser

}



sites.forEach(site => {
    if (site.active == ACTIVE) {
        Screenshot(site.uri,site.file);
    } 

});
