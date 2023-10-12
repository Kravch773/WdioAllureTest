import { BasePage } from '../helper/basePage.ts';
import commonElements from "../helper/commonElements.ts";
class ElementsPage extends BasePage {

  get fullNameInput(): string {
    return '#userName';
  }

  get userEmailInput(): string {
    return '#userEmail';
  }

  get currentAddressInput(): string {
    return 'textarea[id="currentAddress"]';
  }

  get permanentAddressInput(): string {
    return 'textarea[id="permanentAddress"]';
  }

  get currentAddressLabel(): string {
    return 'p[id="currentAddress"]';
  }

  get permanentAddressLabel(): string {
    return 'p[id="permanentAddress"]';
  }

  get submitBtn(): string {
    return '#submit';
  }

  getChbByLabelText(labelText:string): string {
    return `//span[text()="${labelText}"]/ancestor::span//span[@class="rct-checkbox"]/*`;
  }

  getChbToggleByLabelText(labelText:string): string {
    return `//span[text()="${labelText}"]/ancestor::span/button[@title="Toggle"]`;
  }

  getChbResultLabelByText(labelText:string): string {
    return `//div[@id="result"]/span[text()="${labelText}"]`;
  }

  get yesRbtn(): string {
    return '//input[@id="yesRadio"]';
  }

  get impressiveRbtn(): string {
    return '//input[@id="impressiveRadio"]';
  }

  get noRbtn(): string {
    return '#noRadio';
  }

  async clickTextBoxBtn(): Promise<void> {
    await commonElements.clickMenuListElementByName('Text Box');
  }

  async clickPracticeFormBtn(): Promise<void> {
    await commonElements.clickMenuListElementByName('Practice Form');
  }

  async clickCheckBoxBtn(): Promise<void> {
    await commonElements.clickMenuListElementByName('Check Box');
  }

  async clickRadioButtonBtn(): Promise<void> {
    await commonElements.clickMenuListElementByName('Radio Button');
  }

  async getFullNameInputPH(): Promise<string> {
    return await this.getElementAttribute(this.fullNameInput, 'placeholder');
  }

  async setTextBoxFields(fullName:string, email:string, currentAddress:string, permanentAddress:string): Promise<void> {
    await this.setValue(this.fullNameInput, fullName);
    await this.setValue(this.userEmailInput, email);
    await this.setValue(this.currentAddressInput, currentAddress);
    await this.setValue(this.permanentAddressInput, permanentAddress);
  }

  async clickSubmitBtn(): Promise<void> {
    await this.click(this.submitBtn);
  }

  async getFullNameValue(): Promise<string> {
    return this.getElementValue(this.fullNameInput);
  }

  async getUserEmailValue(): Promise<string> {
    return await this.getElementValue(this.userEmailInput);
  }

  async getCurrentAddressValue(): Promise<string> {
    return await this.getElementValue(this.currentAddressInput);
  }

  async getPermanentAddressValue(): Promise<string> {
    return await this.getElementValue(this.permanentAddressInput);
  }

  async getCurrentAddressLabelValue(): Promise<string> {
    return await this.getElementText(this.currentAddressLabel);
  }

  async getPermanentAddressLabelValue(): Promise<string> {
    return await this.getElementText(this.permanentAddressLabel);
  }

  async setElementsChbByLabelText(labelText: string, chbState: boolean = true): Promise<void> {
    await this.setCheckBoxElementState(this.getChbByLabelText(labelText), chbState);
  }

  async setElementsChbToggleByLabelText(labelText: string): Promise<void> {
    await this.setToggleState(this.getChbToggleByLabelText(labelText));
  }

  async isChbResultLabelDisplayed(labelText:string): Promise<void> {
    await this.isElementDisplayed(this.getChbResultLabelByText(labelText));
  }

  async setYesRbtn(): Promise<void> {
    await this.click(this.yesRbtn +"/../label");
  }

  async setImpressiveRbtn(): Promise<void> {
    await this.click(this.impressiveRbtn +"/../label");
  }

  async isYesRbtnSelected(): Promise<boolean> {
    return await this.isRadioBtnSelected(this.yesRbtn);
  }

  async isImpressiveRbtnSelected(): Promise<boolean> {
    return await this.isRadioBtnSelected(this.impressiveRbtn);
  }

  async isYesButtonActive(): Promise<boolean> {
    return await this.isElementActive(this.yesRbtn);
  }

  async isImpressiveButtonActive(): Promise<boolean> {
    return await this.isElementActive(this.impressiveRbtn);
  }

  async isNoButtonActive(): Promise<boolean> {
    return await this.isElementActive(this.noRbtn);
  }
}
export default new ElementsPage();