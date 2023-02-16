

describe('test 1', () => {
    it('test 1', async () => {
        await browser.url("https://www.google.com/")
        console.log("test1-"+await browser.getTitle())
        expect(await browser.getTitle()).toBe("Google")

    })
})


