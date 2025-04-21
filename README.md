# QA Home Assessment Project:

This repository contains my submission for the QA home assessment. It demonstrates my skills in UI automation testing with Cypress, API testing with Postman & Newman, performance testing with Grafana K6, and CI/CD setup with Git Action.

# Project Structure:
qa-candidate-assessment/   
  ui-tests/ # UI automation tests using Cypress  
  api-tests/ # API automation tests using Postman  
  performance-tests/ # Performance tests using Grafana k6  
  .github/workflows/ # GitHub Actions CI/CD configuration  
  README.md # This file  

# Prerequisites:
1.	Install VS code IDE
2.	Install Node.js [v18+]
3.	Clone or download the repository [ https://github.com/helalkhansohel/qa-candidate-assessment ] 
4.	Open the qa-candidate-assessment file with VS code IDE
5.	Open the new terminal in VS code.
6.	In vs code terminal give below commands one by one to install ui-test automation test dependency in Cypress.  
&nbsp;&nbsp;a)	cd ui-tests    
&nbsp;&nbsp;b)	npm install cypress typescript @cypress/webpack-preprocessor @babel/preset-typescript --save-dev  
&nbsp;&nbsp;c)	npm install -D @cypress/xpath   
&nbsp;&nbsp;d)	cd ..  
7.	Now to install the api-test dependency for Newman, put below commands in the same VS code terminal:  
&nbsp;&nbsp;a)	cd api-tests  
&nbsp;&nbsp;b)	npm i newman  
&nbsp;&nbsp;c)	npm i newman-reporter-htmlextra  
&nbsp;&nbsp;d)	cd ..  
8.	 Finally, to install K6 for performance testing, put below command in the same VS code terminal:  
&nbsp;&nbsp;a)	winget install k6 --source winget  
&nbsp;&nbsp;b)	cd ..  
&nbsp;&nbsp;c)  Close and open the VS code IDE.  

# Steps to Run the tests:
1.	UI automation test with Cypress:  
&nbsp;&nbsp;a.	Open the project in root directory (qa-candidate-assessment) with VS code.  
&nbsp;&nbsp;b.	Execute below command in VS code terminal:  
&nbsp;&nbsp;&nbsp;&nbsp;i) cd ui-tests  
&nbsp;&nbsp;&nbsp;&nbsp;ii) npx cypress run      // To run headless  
&nbsp;&nbsp;or  
&nbsp;&nbsp;&nbsp;&nbsp;ii) npx cypress open   // To run on web browser
&nbsp;&nbsp;c.	To see report, give below command:  
&nbsp;&nbsp;&nbsp;&nbsp;cypress/reports/mochawesome.html   
&nbsp;&nbsp;d.	Go back to root directory by below command:    
&nbsp;&nbsp;&nbsp;&nbsp;cd ..  
2.	API automation test with Newman:  
&nbsp;&nbsp;a.	Open the project in root directory (qa-candidate-assessment) with VS code.  
&nbsp;&nbsp;b.	To run the api test, execute below command in vs code terminal:  
&nbsp;&nbsp;&nbsp;&nbsp;i) cd api-tests  
&nbsp;&nbsp;&nbsp;&nbsp;ii) npx newman run .\collection\api-tests.postman_collection.json -e .\collection\Grocery-Store-Env.postman_environment.json -n 1  
&nbsp;&nbsp;c.	To generate report, execute below command in vs code terminal:  
&nbsp;&nbsp;&nbsp;&nbsp;npm test  
&nbsp;&nbsp;d.	To see the report in the browser, run the below command in vs code terminal:  
&nbsp;&nbsp;&nbsp;&nbsp;Reports/report.html  
&nbsp;&nbsp;e.	Go back to root directory by below command in vs code terminal:    
&nbsp;&nbsp;&nbsp;&nbsp;cd ..  

3.	Performance automation test with K6:  
&nbsp;&nbsp;a.	Open the project in root directory (qa-candidate-assessment) with VS code.  
&nbsp;&nbsp;b.	To run the performance test Execute below command in VS code terminal:  
&nbsp;&nbsp;&nbsp;&nbsp;i) cd performance-tests  
&nbsp;&nbsp;&nbsp;&nbsp;ii) k6 run order-creation-test.js  
&nbsp;&nbsp;c.	To see the report in the browser , run the below command in VS code terminal:  
&nbsp;&nbsp;&nbsp;&nbsp;report/summary.html  
&nbsp;&nbsp;d.	Go back to root directory by below command in VS code terminal:    
&nbsp;&nbsp;&nbsp;&nbsp;cd ..  

# Note:   
1.	GitHub Actions workflow runs successfully on push in the main branch.  
2.	For performance testing, I have not used world time duration and number of user.   
