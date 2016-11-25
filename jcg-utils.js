function deepObjectCopy(obj) {
    return JSON.parse(JSON.stringify(obj));
}

function floatRegex(n) {
    var regex = /^([0-9]*[.])?[0-9]*$/;
    return regex.test(n);
}

export { deepObjectCopy, floatRegex };
