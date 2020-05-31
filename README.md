# sd-lab-30432-mirunabetianu
sd-lab-30432-mirunabetianu created by GitHub Classroom


# Project Title

Online Marketplace

## Project Description

C# application which aims to design an online marketplace. The application has three types of users: the user (which can be either seller or buyer), the advertiser and the administrator of the platform. All of them have to provide a username and a password in order to use the site.

The user can perform the following operations:
* Add a product
* Receive a notification when his product is sold 
* See the products by category or a collection of recommendations
* Rate/Buy a product (after buying, a receipt is generated - *.pdf/.txt)
* Apply as an advertiser

The advertiser can perform the following operations:
* CRUD on ads

The administrator can perform the following operations:
* CRUD the categories
* Validate&Add new advertisers

## Implementation steps

- [x] UML class diagrams and database structure
- [x] connection to the database (dbcontext, migrations)
- [x] REST APIs 
- [x] frontend-backend communication through APIs
- [x] added components, pages on frontend
- [x] refactoring (added react-redux, redux-saga and react-hooks) 
- [x] implement factory method design pattern
- [x] add more functionalities to the backend: rating calculator and report generator
- [ ] introduction of web sockets: notify the seller when his product is sold