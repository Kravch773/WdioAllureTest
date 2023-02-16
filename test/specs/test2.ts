
describe('test 2', () => {
    it('test 2', async () => {
        await browser.url("https://www.google.com/")

        const p = $('//input');
        p.setValue("pepega");
        (await $('(//input[@name="btnK"])[2]')).click();
        
        await expect($("//div//h3").getText()).toContain("pepega");

    })
})


