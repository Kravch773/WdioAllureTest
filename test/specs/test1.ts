

describe('test 1', () => {
    it('test 1', async () => {
        await browser.url("https://www.google.com/")
        expect(browser.getTitle()).toBe("Google")

    })
})


