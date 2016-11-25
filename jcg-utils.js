exports.deepObjectCopy = function(obj) {
    return JSON.parse(JSON.stringify(obj));
};

exports.floatRegex = function(n) {
    var regex = /^([0-9]*[.])?[0-9]*$/;
    return regex.test(n);
};
