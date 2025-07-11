# QA Home Assessment Project:

This repository contains my submission for the QA home assessment. It demonstrates my skills in UI automation testing with Cypress, API testing with Postman & Newman, performance testing with Grafana K6, and CI/CD setup with Git Action.

# Project Structure:
qa-candidate-assessment/   
&nbsp;&nbsp;--ui-tests/ # UI automation tests using Cypress  
&nbsp;&nbsp;--api-tests/ # API automation tests using Postman  
&nbsp;&nbsp;--performance-tests/ # Performance tests using Grafana k6  
&nbsp;&nbsp;--.github/workflows/ # GitHub Actions CI/CD configuration  
&nbsp;&nbsp;--README.md # This file  

# Prerequisites:
1.	Install VS code IDE
2.	Install Node.js [v18+]
3.	Clone or download the repository [ https://github.com/helalkhansohel/qa-candidate-assessment ] 
4.	Open the qa-candidate-assessment file with VS code IDE
5.	Open the new terminal in VS code.
6.	In vs code terminal give below commands one by one to install ui-test automation test dependency in Cypress.  
```bash  
cd ui-tests    
npm install cypress typescript @cypress/webpack-preprocessor @babel/preset-typescript --save-dev  
npm install -D @cypress/xpath   
npm install --save-dev mochawesome mochawesome-merge mochawesome-report-generator
cd ..  
```  
7. Now to install the api-test dependency for Newman, put below commands in the same VS code terminal: 
```bash   
cd api-tests  
npm i newman  
npm i newman-reporter-htmlextra  
cd ..  
```  
8.	 Finally, to install K6 for performance testing, put below command in the same VS code terminal:  
```bash  
cd performance-tests
winget install k6 --source winget  
cd ..
```    
9. Close and open the VS code IDE.  

# Steps to Run the tests:
1.	UI automation test with Cypress:  
a.	Open the project in root directory (qa-candidate-assessment) with VS code.  
b.	Execute below command in VS code terminal:  
```bash  
cd ui-tests  
npx cypress run      // To run headless  
or  
npx cypress open   // To run on web browser   
```   
&nbsp;&nbsp;&nbsp;&nbsp;c.	To see report, give below command:  
```bash  
cypress/reports/mochawesome.html 
```    
&nbsp;&nbsp;&nbsp;&nbsp;d.	Go back to root directory by below command:  
```bash    
cd ..  
```  
2.	API automation test with Newman:  
a.	Open the project in root directory (qa-candidate-assessment) with VS code.  
b.	To run the api test, execute below command in vs code terminal:  
```bash  
cd api-tests  
npx newman run .\collection\api-tests.postman_collection.json -e .\collection\Grocery-Store-Env.postman_environment.json -n 1  
```  
&nbsp;&nbsp;&nbsp;&nbsp;c.	To generate report, execute below command in vs code terminal: 
```bash   
npm test  
```  
&nbsp;&nbsp;&nbsp;&nbsp;d.	To see the report in the browser, run the below command in vs code terminal:  
```bash  
Reports/report.html  
```  
&nbsp;&nbsp;&nbsp;&nbsp;e.	Go back to root directory by below command in vs code terminal: 
```bash   
cd ..  
```  
3.	Performance automation test with K6:  
a.	Open the project in root directory (qa-candidate-assessment) with VS code.  
b.	To run the performance test Execute below command in VS code terminal: 
```bash   
cd performance-tests  
k6 run order-creation-test.js  
```  
&nbsp;&nbsp;&nbsp;&nbsp;c.	To see the report in the browser , run the below command in VS code terminal:  
```bash  
report/summary.html  
```  
&nbsp;&nbsp;&nbsp;&nbsp;d.	Go back to root directory by below command in VS code terminal: 
```bash     
cd ..  
```  

# Note:   
1.	GitHub Actions workflow runs successfully on push in the main branch.  
2.	For performance testing, I have not used real world time duration and number of user.   
