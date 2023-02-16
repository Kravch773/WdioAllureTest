
describe('test 2', () => {
    it('test 2', async () => {
        await browser.url("https://www.google.com/")

        const p = $('//input');
        p.setValue("pepega");
        (await $('(//input[@name="btnK"])[2]')).click();
        console.log("test2-"+await browser.getTitle())
        expect(await browser.getTitle()).toBe("pepega")
    
    })
})


