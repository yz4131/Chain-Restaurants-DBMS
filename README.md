# Chain Restaurants Database Management System

![screenshot](src/assets/logo.png)

**Web URL:**

+ http://35.211.4.196:8111

**Installation Steps:**

+ 1. Open terminal, run git clone https://github.com/yz4131/Chain-Restaurants-DBMS
+ 2. Install the required lib, including flask, flask_cors, psycopg2, sqlalchemy, nodeJS, npm, react-scripts(npm i react-scripts)
+ 3. Run npm start then you're all set

**Contributors:**

+ Yuqin Zhao (yz4131) yz4131@columbia.edu
+ Yutong Chen (yc3993) yc3993@columbia.edu

**PSQL Account:**

+ yc3993

**Description:**

We developed a Web UI for any restaurants to easily manage its Database. 

+ Restaurants Customers: go through Restaurants' Menu, and giving tips to Waiters. 

+ Restaurants Manager: check the information of all Customers and Employees, make adjustments to Employees' information, hire new Employees

Employees are devided into 3 roles: Chefs, Cashiers and Waiters.

+ Chefs: check shift, salary, and record cooking information for food safety purpose.

+ Cashiers: check shift, salary, and check out(recording Customers personal information, payment information, order information)

+ Waiters: check shift, salary and tips they received

**Some Interesting Web Pages**

+ 1. Cashiers' check out page. A Customer tell Cashier his/her names, email address, and what he/she would like to order and Cashier selects the items, selects the Restaurant ID the Customer visits, and fills in Cashier' ID. On the backend, Customer's email and name will be stored in "Customers Table"(if not already exists) and an order ID and a Customer ID will be created for this New Customer. If he/she is an old customer, his/her Customer ID will be searched from the Database and an order ID will be generated. His/Her visiting records will be stored in "Visits Table".



