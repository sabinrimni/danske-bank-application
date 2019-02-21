"use strict";
exports.__esModule = true;
var express = require("express");
var logger = require("morgan");
var bodyParser = require("body-parser");
var PersonRouter_1 = require("./Routes/PersonRouter");
var FacilityRouter_1 = require("./Routes/FacilityRouter");
var ExposureRouter_1 = require("./Routes/ExposureRouter");
// Creates and configures an ExpressJS web server.
var App = /** @class */ (function () {
    //Run configuration methods on the Express instance.
    function App() {
        this.express = express();
        this.middleware();
        this.routes();
    }
    // Configure Express middleware.
    App.prototype.middleware = function () {
        this.express.use(function (req, res, next) {
            res.header('Access-Control-Allow-Origin', req.get('Origin') || '*');
            res.header('Access-Control-Allow-Credentials', 'true');
            res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
            res.header('Access-Control-Expose-Headers', 'Content-Length, Token');
            res.header('Access-Control-Allow-Headers', 'Accept, Authorization, Content-Type, X-Requested-With, Range');
            if (req.method === 'OPTIONS') {
                return res.sendStatus(200);
            }
            else {
                return next();
            }
        });
        this.express.use(logger('dev'));
        this.express.use(bodyParser.json({ limit: '5mb' }));
        this.express.use(bodyParser.urlencoded({ extended: true, limit: '5mb' }));
    };
    // Configure API endpoints.
    App.prototype.routes = function () {
        var router = express.Router();
        // placeholder route handler
        router.get('/', function (req, res, next) {
            res.json({
                message: 'Server is up!'
            });
        });
        this.express.use('/', router);
        this.express.use("/person", PersonRouter_1["default"]);
        this.express.use("/facility", FacilityRouter_1["default"]);
        this.express.use("/exposure", ExposureRouter_1["default"]);
    };
    return App;
}());
exports["default"] = new App().express;
