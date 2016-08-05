var wd = require('wd');
var json= require("../../../test_data/data.json");
var asserters = wd.asserters;
module.exports = {
  enterLoginCredentials : function (browser, done){
    return browser
          .waitForElementById('Email', asserters.isDisplayed, 50000)
          .type(json.username)
          .waitForElementById('next', asserters.isDisplayed, 50000)
          .click()
          .waitForElementById('Passwd', asserters.isDisplayed, 50000)
          .type(json.password)
          .waitForElementById('signIn', asserters.isDisplayed, 50000)
          .click()
          .get("https://mail.google.com/mail/u/0/#inbox")
          .nodeify(done);
  },


  getPrevInboxValue: function (browser){
    return browser
          .waitForElementByXPath("//a[contains(text(),'Inbox')]", asserters.isDisplayed, 50000)
          .text();
        },

  composeEmail: function (browser, done){
    return browser
              .waitForElementByCssSelector("div[gh='cm']", asserters.isDisplayed, 50000)
              .click()
              .waitForElementByCssSelector("textarea[aria-label='To']", asserters.isDisplayed, 80000)
              .click()
              .waitForElementByCssSelector("textarea[aria-label='To']", asserters.isDisplayed, 50000)
              .type(json.To)
              .waitForElementByCssSelector("input[class='aoT']", asserters.isDisplayed, 50000)
              .type(json.Subject)
              .waitForElementByCssSelector('div[aria-label="Message Body"]', asserters.isDisplayed, 50000)
              .click()
              .waitForElementByCssSelector('div[aria-label="Message Body"]', asserters.isDisplayed, 50000)
              .type(json.Body)
              .waitForElementByCssSelector('div[aria-label="Send ‪(Ctrl-Enter)‬"]', asserters.isDisplayed, 50000)
              .click()
              .sleep(2000)
              .nodeify(done);
  },

  refreshPage: function(browser, done){
    return browser
          .waitForElementByXPath("//a[contains(text(),'Inbox')]", asserters.isDisplayed, 50000)
          .click()
          .nodeify(done);
  },

  getCurrentInboxValue: function(browser){
    return browser
          .waitForElementByXPath("//a[contains(text(),'Inbox')]", asserters.isDisplayed, 50000)
          .text();
  }
};
