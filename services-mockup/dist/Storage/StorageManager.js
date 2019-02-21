"use strict";
exports.__esModule = true;
var fs = require("fs");
var path = require("path");
var StorageManager = /** @class */ (function () {
    function StorageManager() {
        var storage = JSON.parse(fs.readFileSync(path.resolve(__dirname, "./MockStorage.json"), "utf8"));
        this.Persons = storage.Persons;
        this.Failities = storage.Facilities;
        this.Exposures = storage.Exposures;
    }
    StorageManager.prototype.getPerson = function (id) {
        return this.Persons.find(function (x) { return x.id == id; });
    };
    StorageManager.prototype.getFacility = function (val1) {
        return this.Failities.find(function (x) { return x.val1 == val1; });
    };
    StorageManager.prototype.getExposure = function (val2) {
        return this.Exposures.find(function (x) { return x.val2 == val2; });
    };
    return StorageManager;
}());
exports["default"] = new StorageManager();
