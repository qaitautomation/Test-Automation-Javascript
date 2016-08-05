To start with the project install Node js from:
Windows: https://nodejs.org/en/

*nix : https://nodejs.org/en/download/package-manager/

Then install :
mocha
chai
chai-as-promised
grunt
jshint
wd

using npm install command in your command prompt (For ubuntu users apply sudo)
 for eg:
 npm install mocha
 
 to start the server download the Selenium 2.53.1 (or compatible version) and in the kept folder write the following command :
 ----->     java -jar selenium-server-standalone-2.53.1.jar
 This starts your server.
 
 Once you're done with all of the above, there are two ways to start the test:
 a)
 1. Visit test folder in gmailAutomate after running the server
 2. Open another terminal or Comand prompt at the same location or reach there and write: mocha action.js
 
b)
1. Run the server
2. Open another terminal or Comand prompt at gmailautomate location and type : grunt development --force


That's it.

P.S. : Let us know if you find anything that can be enhanced.
