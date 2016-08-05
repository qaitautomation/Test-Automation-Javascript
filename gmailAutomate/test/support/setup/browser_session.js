
var wd = require('wd');
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");

chai.use(chaiAsPromised);
chai.should();
chaiAsPromised.transferPromiseness = wd.transferPromiseness;

var browser;


module.exports={
create: function(done) {


    var  desired = {
            browserName : 'chrome'
        };

      browser = wd.promiseChainRemote();
		    browser
        .init(desired)
        .get("https://accounts.google.com/")
        .maximize()
				.nodeify(done);
			return	browser;

}
};
