# danske-bank-application
A simple SPA application designed to fetch data from a mock API and visualize the result.
This project is built with Aurelia as a frontend framework and Express.js for mocking services. All relevant source code is in Typescript 3.
 
### Pre-requisites ###
* Node.js version 10.x.x (recommended: 10.15.1)

### How to run the distribution ###
In order to run the distribution build of the project, simply navigate to the folder `danske-bank-application/services-mockup` and run the following command: `npm install`. This will install the packages for the mock services, after which type `npm start` from within the same folder to start the services.
Once the services are up and running, navigate to the folder `danske-bank-application/dist` and open `index.html` in any browser.

NOTE: The mock service has 2 objects with IDs `1` and `2` that can be used for testing. See `danske-bank-application/services-mockup/dist/Storage/MockStorage.json` for more information on the mock data.

### How to setup and build ###
In order to build the project there are some `npm` modules to install:
* For building the mock server, navigate to the folder `danske-bank-application/services-mockup` and run the following command: `npm install` and `npm install gulp -g`. 
  * Building the server requires the execution of the command `gulp scripts` from within the same folder. Output files are generate in the `danske-bank-application/services-mockup/dist` folder.
  * To run the services, simply type `npm start` from the `danske-bank-application/services-mockup` folder.
* For building the frontend, navigate to the root directory of the project (`danske-bank-application`) and run `npm install` and `npm install aurelia-cli -g`.
  * To build the project, run `au build --env prod` from the root folder.
  * To simply run the project, execute `au run` from the root folder.
 
