import { browser } from '@wdio/globals'

const defaultTimeout = 20000; // 20sec
export class BasePage {
  async openURL(path: string = ''): Promise<void> {
    await browser.url(`https://demoqa.com/${path}`);
  }
  async getElement(element:string): Promise<WebdriverIO.Element> {
    return $(element);
  }
  async getElements(element:string) {
    return $$(element);
  }
  async click(element:string): Promise<void> {
    await this.waitUntilClickable(element, defaultTimeout);
    await (await this.getElement(element)).click();
  }
  async waitUntilClickable(element:string, timeout = defaultTimeout): Promise<void> {
    try {
      return await (await this.getElement(element)).waitUntil(async () => {
        return await (await this.getElement(element)).isClickable();
      }, { timeout });
    } catch (error) {
      console.warn(`element "${element}" is not clickable`);
      throw error;
    }
  }
  // async waitUntilClickable(element, timeout = defaultTimeout): Promise<void> {
  //     const elem = await this.getElement(element);
  //     await elem.waitUntil(elem.isClickable, { timeout: timeout });
  // }

  // async waitUntilDisplayed(element, timeout = defaultTimeout): Promise<void> {
  //     const elem = await this.getElement(element);
  //     await elem.waitUntil(elem.isDisplayed, { timeout: timeout });
  // }
  async waitUntilDisplayed(element:string, timeout = defaultTimeout): Promise<void> {
    try {
      return await (await this.getElement(element)).waitUntil(async () => {
        return await (await this.getElement(element)).isDisplayed();
      }, { timeout });
    } catch (error) {
      console.warn(`element "${element}" is not displayed`);
      throw error;
    }
  }
  async setValue(element:string, value:string): Promise<void> {
    await this.waitUntilDisplayed(element);
    await (await this.getElement(element)).setValue(value);
  }
  async addValue(element:string, value:string): Promise<void> {
    await this.waitUntilDisplayed(element);
    await (await this.getElement(element)).addValue(value);
  }
  async getElementText(element:string): Promise<string> {
    await this.waitElementForDisplayed(element);
    return await (await this.getElement(element)).getText();
  }
  // async isElementDisplayed(element, timeout = defaultTimeout): Promise<boolean> {
  //     await this.waitElementForDisplayed(element, timeout);
  //     return await (await this.getElement(element)).isDisplayed();
  // }
  async isElementDisplayed(element:string, timeout:number = defaultTimeout): Promise<boolean> {
    await this.waitElementForDisplayed(element, timeout);
    return await (await this.getElement(element)).isDisplayed();
  }
  async getElementValue(element:string) {
    await this.waitUntilDisplayed(element, defaultTimeout);
    return await (await this.getElement(element)).getValue();
  }
  async clearValue(element:string): Promise<void> {
    await this.waitUntilDisplayed(element);
    await (await this.getElement(element)).clearValue();
  }
  async setDropDownByOptionValue(element:string, text:string) {
    await this.waitUntilClickable(element, defaultTimeout);
    await (await this.getElement(element)).selectByVisibleText(text);
  }
  async setDropdownItemByContainText(element:string, text:string) {
    await this.waitUntilClickable(element, defaultTimeout);
    let fullOptionText = await this.getElementText(element + `//option[contains(text(),"${text}")]`)
    await (await this.getElement(element)).selectByVisibleText(fullOptionText);
  }
  async setDropdownItemByIndex(element:string, index:number) {
    await this.waitUntilClickable(element, defaultTimeout);
    await (await this.getElement(element)).selectByIndex(index);
  }
  //down
  // async scrollElementIntoViewTop(element) {
  //     await this.waitUntilDisplayed(element, defaultTimeout);
  //     await (await this.getElement(element)).scrollIntoView(false);
  // }
  // async scrollElementIntoView(element) {
  //     await this.waitUntilDisplayed(element, defaultTimeout);
  //     await (await this.getElement(element)).scrollIntoView();
  // }
  async scrollElementIntoViewTop(element:string) {
    await this.waitUntilDisplayed(element, defaultTimeout);
    const targetElement = await this.getElement(element);
    await targetElement.scrollIntoView({ block: 'center', inline: 'start' });
  }
  async setCheckBoxElementState(element:string, state:boolean) {
    await this.waitUntilDisplayed(element, defaultTimeout);
    if (await (await this.getElement(element)).isSelected() !== state) {
      await this.click(element);
    }
  }
  // async waitElementForDisplayed(element, timeout = defaultTimeout) {
  //   await (await this.getElement(element)).waitForDisplayed({ timeout });
  // }
  async waitElementForDisplayed(element:string, timeout = defaultTimeout) {
    try {
      return await (await this.getElement(element)).waitUntil(async () => {
        return await (await this.getElement(element)).isDisplayed();
      }, { timeout });
    } catch (error) {
      console.warn(`element "${element}" isnt showed up`);
    }
  }
  async waitUntilNotDisplayed(element:string, timeout = defaultTimeout): Promise<void> {
    try {
      return await (await this.getElement(element)).waitUntil(async () => {
        return !await (await this.getElement(element)).isDisplayed();
      }, { timeout });
    } catch (error) {
      console.warn(`element "${element}" still displayed`);
    }
  }
  async waitElementForNotDisplayed(element:string) {
    await (await this.getElement(element)).waitForDisplayed({ reverse: true });
  }
  async isElementSelected(element:string) {
    return await (await this.getElement(element)).isSelected();
  }
  async getElementsQty(element:string): Promise<number> {
    await this.waitElementForDisplayed(element)
    return (await this.getElements(element)).length;
  }
  async waitUntilExists(element:string, timeout:number = defaultTimeout): Promise<void> {
    try {
      return await (await this.getElement(element)).waitUntil(async () => {
        return await (await this.getElement(element)).isExisting();
      }, { timeout });
    } catch (error) {
      console.warn(`element "${element}" isnt exist `);
    }
  }
  // async waitUntilExists(element, timeout = defaultTimeout) {
  //     await browser.waitUntil(await (await this.getElement(element)).isExisting()), {
  //         timeout: timeout
  //     }
  // }
  async isElementExisting(element:string, timeout:number = defaultTimeout) {
    await this.waitUntilExists(element, timeout);
    return await (await this.getElement(element)).isExisting();
  }
  async isElementNotExisting(element:string) {
    return !await (await this.getElement(element)).isExisting();
  }
  async getElementAttribute(element:string, attribute:string) {
    await this.waitUntilExists(element);
    return await (await this.getElement(element)).getAttribute(attribute);
  }
  async isElementClickable(element:string) {
    await this.waitElementForDisplayed(element)
    return await (await this.getElement(element)).isClickable();
  }
  async randomNumber(maxNum:number) {
    return Math.floor(Math.random() * maxNum);
  }

  async setToggleState(element: string) {
    if ((await this.getElementAttribute(element + '/../..', 'class')).includes('-collapse')) {
      await this.click(element);
    }
  }

  async setDemoQACheckBoxElementState(element: string) {
    if ((await this.getElementAttribute(element, 'class')).includes('-uncheck')) {
      await this.click(element);
    }
  }

  // public convertStringToDate(date:string): Date {
  //   let newDateArr: string[];
  //
  //   if (date.includes('/')) {
  //     newDateArr = date.split('/');
  //   }
  //   if (newDateArr[2].length > 5) { //remove time or aditional data after year
  //     let yearArr = newDateArr[2].split(',');
  //     newDateArr[2] = yearArr[0];
  //   }
  //   if (newDateArr[2].length == 2) {
  //     if (Number(newDateArr[2]) >= 50) {
  //       newDateArr[2] = '19' + newDateArr[2];
  //     }
  //     if (Number(newDateArr[2]) < 50) {
  //       newDateArr[2] = '20' + newDateArr[2];
  //     }
  //   }
  //   let tempDate = (newDateArr[2] + '/' + (newDateArr[0]) + '/' + newDateArr[1]);
  //   return new Date(tempDate);
  // }

  public async getMathCalendarAriaLabel(element:string): Promise<number> {
    return Number(await this.getElementAttribute(element, 'aria-label'));
  }


  async isRadioBtnSelected(element: string): Promise<boolean> {
    return await (await this.getElement(element)).isSelected();
  }

  async isElementActive(element: string): Promise<boolean> {
    return await (await this.getElement(element)).isEnabled();
  }
  async uploadFile(uploadFileInput:string,filePath:string): Promise<void> {
    await this.setValue(uploadFileInput,filePath);
  }
}
