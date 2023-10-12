import elementsPage from "../pages/elements.page.ts";
import formPage from "../pages/form.page.ts";
import mainPage from "../pages/main.page.ts";

const firstName_1 = 'Alex';
const firstName_2 = 'John';
const lastName_1 = 'Smith';
const lastName_2 = 'Doe';
const userEmail_1 = 'alex.smith@email.com';
const userEmail_2 = 'john.doe@email.com';
const gender_1 = 'Male';
const gender_2 = 'Female';
const userMobile_1 = '1234567890';
const userMobile_2 = '0987654321';
const userDob_1 = '05 Sep 2001';
const userDob_2 = '06 Oct 1991';
const hobbie_1 = 'Reading';
const hobbie_2 = 'Sports';
const filePath_1 =  process.cwd()+'/testFiles//PCE_testDoc_1.docx'
const filePath_2 = process.cwd()+'/testFiles/PCE_testDoc_1.docx';
const currentAddress_1 = 'test Street #1 USA New York';
const currentAddress_2 = 'test Street #2 UK London';


describe('Test Form Page', () => {

    it('Go to Forms page and check text box', async () => {
        await mainPage.openMainPage();
        await mainPage.clickFormsBtn();
    });

    it('Verify Form', async () => {
        await elementsPage.clickPracticeFormBtn();
        await formPage.setPracticeForm(firstName_1, lastName_1, userEmail_1, gender_1, userMobile_1, userDob_1, hobbie_1, filePath_1, currentAddress_1);
        expect(await formPage.getFirstNameValue()).toBe(firstName_1);
        // await practiceForm.clickSumbitFormBtn(); //site bug
    });
});

