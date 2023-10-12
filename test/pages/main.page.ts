import { BasePage } from '../helper/basePage.ts';

 class MainPage extends BasePage {
  get elementsBtn(): string {
    return '//h5[normalize-space()="Elements"]';
  }
  get formsBtn(): string {
    return '//h5[normalize-space()="Forms"]';
  }
  async openMainPage(): Promise<void> {
    await this.openURL();
  }

  async clickElementsBtn(): Promise<void> {
    await this.click(this.elementsBtn);
  }
  async clickFormsBtn(): Promise<void> {
    await this.click(this.formsBtn);
  }
  async refreshPage():Promise<void>{
    await browser.refresh();
  }
}
export default new MainPage();
