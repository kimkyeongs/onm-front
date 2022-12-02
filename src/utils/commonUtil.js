export function cloneArry(source) {
    var target = {};
    if (source instanceof Array) {
        target = [];
    }
    for (let i in source) {
        if (
            source[i] != null &&
            typeof source[i] === "object" &&
            source[i] instanceof Array
        ) {
            target[i] = cloneArry(source[i]); // resursion
        } else {
            target[i] = source[i];
        }
    }
    return target;
}

export function lowerValue(obj) {
    for (var prop in obj) {
        if (typeof obj[prop] === "string") {
            obj[prop] = obj[prop].toLowerCase();
        }
        if (typeof obj[prop] === "object") {
            lower(obj[prop]);
        }
    }
    return obj;
}

export function keysToLowerCase(obj) {
    if (obj instanceof Array) {
        for (var i in obj) {
            obj[i] = keysToLowerCase(obj[i]);
        }
    }
    if (!typeof obj === "object" ||
        typeof obj === "string" ||
        typeof obj === "number" ||
        typeof obj === "boolean"
    ) {
        return obj;
    }
    var keys = Object.keys(obj);
    var n = keys.length;
    var lowKey;
    while (n--) {
        var key = keys[n];
        if (key === (lowKey = key.toLowerCase())) continue;
        obj[lowKey] = keysToLowerCase(obj[key]);
        delete obj[key];
    }
    return obj;
}

export function numberConvert(val) {
    var replaceValue = val.toString().replace(/,/g, "");
    return Number(replaceValue);
}

/**
 * @param {string} url
 * @returns {Object}
 */
export function param2Obj(url) {
    const search = decodeURIComponent(url.split("?")[1]).replace(/\+/g, " ");
    if (!search) {
        return {};
    }
    const obj = {};
    const searchArr = search.split("&");
    searchArr.forEach((v) => {
        const index = v.indexOf("=");
        if (index !== -1) {
            const name = v.substring(0, index);
            const val = v.substring(index + 1, v.length);
            obj[name] = val;
        }
    });
    return obj;
}

export function combineNumToStr(val1, val2, val3) {
    var combineStr = val1.toString() + val2.toString() + val3.toString();
    return combineStr;
}

export function maskingEmail(str) {
    var tmp = str.indexOf("@");
    if (tmp > -1) {
        var maskingEmail =
            str.substring(0, 1) + "*".repeat(tmp - 1) + str.substring(tmp);
        return maskingEmail;
    } else {
        return str;
    }
}