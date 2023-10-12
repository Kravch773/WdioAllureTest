import {BasePage} from "./basePage.ts";

class CommonElements extends BasePage {
  getMenuListBtnByName(elementName:string):string{
    return `//li//span[text()="${elementName}"]`
  }
  getMenuElementByName(listName:string):string{
    return`//div[@class="header-text"][text()="${listName}"]`
  }
  async clickMenuListElementByName(elementName:string):Promise<void>{
    await this.click(this.getMenuListBtnByName(elementName));
  }
  async clickMenuElementByName(elementName:string):Promise<void>{
    await this.click(elementName);
  }

}
export default new CommonElements();
