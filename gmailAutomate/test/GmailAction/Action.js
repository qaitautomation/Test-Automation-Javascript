var wd= require('wd');
var browser;
var chaiAsPromised= require("chai-as-promised");
var gmail = require("../support/Pages/Gmail.js");
var session = require("../support/setup/browser_session.js");
var prev;
var current;

describe('Gmail Automate', function(){
  before(function(done){
    	this.timeout(60000);
    browser=session.create(done);
  });


  it('signIn', function(done){
    this.timeout(100000);
    gmail.enterLoginCredentials(browser, done);
  });

  it('stores previous value of inbox', function(done){
    this.timeout(100000);
    gmail.getPrevInboxValue(browser, done)
    .then(function(text){
      var re = /\((.*)\)/;
      var pre1=text.replace(/[A-Za-z$-]/g, "");
      var pre2=pre1.match(re)[1];
      prev=parseInt(pre2.replace(/,/g, ''));
      console.log(prev);
    })
    .nodeify(done);
  });

  it('Compose Email', function(done){
    this.timeout(100000);
    gmail.composeEmail(browser, done);
  });

  it('Refresh Page', function(done){
    this.timeout(100000);
    gmail.refreshPage(browser, done);
  });

  it('stores current value of inbox', function(done){
    this.timeout(100000);
    gmail.getCurrentInboxValue(browser)
    .then(function(text){
      var re = /\((.*)\)/;
      var curr1=text.replace(/[A-Za-z$-]/g, "");
      var curr2=curr1.match(re)[1];
      current= parseInt(curr2.replace(/,/g, ''));
      console.log(current);
    })
    .nodeify(done);
  });

  it('validate inbox count', function(done){
    this.timeout(10000);
    if (current==(prev+1))
    console.log("Message added to inbox");
    else {
      console.log("Failed to add.");
    }
    done();
  });

    after(function(done){
      this.timeout(10000);
      browser
      .sleep(2000)
      .waitForElementByCssSelector('.gb_3a')
      .click()
      .sleep(1000)
      .waitForElementByCssSelector('a[id="gb_71" ]')
      .click()
      .sleep(2000)
      .close()
      .nodeify(done);
    });

});
