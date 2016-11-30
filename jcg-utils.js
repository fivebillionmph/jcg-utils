var cloneDeep = require("lodash").cloneDeep;

exports.deepObjectCopy = function(obj) {
    return cloneDeep(obj);
};

exports.floatRegex = function(n) {
    var regex = /^-?([0-9]*[.])?[0-9]*$/;
    return regex.test(n);
};
