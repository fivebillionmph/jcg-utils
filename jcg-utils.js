function deepObjectCopy(obj) {
    return JSON.parse(JSON.stringify(obj));
}

export { deepObjectCopy };
