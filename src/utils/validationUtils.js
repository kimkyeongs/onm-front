export function emailValidation(str) {
    let result = false;
    if (str !== null) {
        var emailRule =
            /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i; // 이메일 정규식
        if (emailRule.test(str)) {
            result = true;
        }
    }
    return result;
}
export function emptyValidation(str) {
    let result = false;
    if (str !== null) {
        str = str.replace(/ /g, "");
        if (str.length >= 1) {
            result = true;
        }
    }
    return result;
}
export function bizNumValidation(str) {
    let result = false;
    if (str !== null) {
        str = str.replace(/ /g, "");
        if (str.length === 12) {
            result = true;
        }
    }
    return result;
}

function stck(str, limit) {
    const apbhaSArr = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz";
    const apbhaSArrDesc = "zyxwvutsrqponmlkjihgfedcbazyxwvutsrqponmlkjihgfedcba";
    const apbhaBArr = "ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const apbhaBArrDesc = "ZYXWVUTSRQPONMLKJIHGFEDCBAZYXWVUTSRQPONMLKJIHGFEDCBA";
    const numberArr = "01234567890123456789";
    const numberArrDesc = "09876543210987654321";

    limit = !limit || limit > 3 || limit < 2 ? 3 : limit;
    if (!str || str.length < 1) return true;

    for (var idx = 0; idx < str.length; idx++) {
        if (idx + limit >= str.length) {
            return true;
        }

        var compStr = str.substr(idx, limit);

        if (apbhaSArr.indexOf(compStr) > 0) {
            return false;
        }
        if (apbhaBArr.indexOf(compStr) > 0) {
            return false;
        }
        if (numberArr.indexOf(compStr) > 0) {
            return false;
        }
        if (apbhaSArrDesc.indexOf(compStr) > 0) {
            return false;
        }
        if (apbhaBArrDesc.indexOf(compStr) > 0) {
            return false;
        }
        if (numberArrDesc.indexOf(compStr) > 0) {
            return false;
        }
    }
}

export function passwordValidation(str, idStr, phoneNumStrParm) {
    const message = "";
    var rule = /^(?=.*[a-z])(?=.*\d)(?=.*[$@$!*&^])[0-9a-zA-Z!@$^*&-_]{8,}$/g; // 비밀번호 정규식
    var dupRuleC = /(\w)\1\1/;

    if (!rule.test(str)) {
        return {
            result: false,
            message: "비밀번호는8자이상으로영문+숫자+특수문자(!,@,$,^,&,*,_,-) 조합으로입력해주세요.",
        };
    }

    if (!stck(str, 3)) {
        return {
            result: false,
            message: "연속적인 문자/숫자는 사용할 수 없습니다.",
        };
    }

    if (idStr && str === idStr) {
        return {
            result: false,
            message: "아이디와 동일한 비밀번호를 사용할 수 없습니다.",
        };
    }

    if (dupRuleC.test(str)) {
        return {
            result: false,
            message: "연속적인 문자/숫자는 사용할 수 없습니다.",
        };
    }

    let phoneNumStr = phoneNumStrParm.slice(3);

    if (phoneNumStr && phoneNumStr.length > 6) {
        if (
            phoneNumStr.length == 7 &&
            (str.indexOf(phoneNumStr.slice(-4)) > 0 ||
                str.indexOf(phoneNumStr.slice(0, 2)) > 0)
        ) {
            return {
                result: false,
                message: "휴대폰 번호와 동일한 비밀번호를 사용할 수 없습니다.",
            };
        }
        if (
            phoneNumStr.length == 8 &&
            (str.indexOf(phoneNumStr.slice(-4)) > 0 ||
                str.indexOf(phoneNumStr.slice(0, 3)) > 0)
        ) {
            return {
                result: false,
                message: "휴대폰 번호와 동일한 비밀번호를 사용할 수 없습니다.",
            };
        }
    }

    return { result: true, message: "안전한 비밀번호 입니다." };
}

export function passwordValidationDefalt(str) {
    //var rule = /^(?=.*[a-z])(?=.*\d)(?=.*[$@$!*&^])[0-9a-zA-Z!@$^*&-_]{8,}$/g; // 비밀번호 정규식
    var rule = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    if (!rule.test(str)) {
        return {
            result: false,
            message: "비밀번호는8자이상으로영문+숫자+특수문자(!,@,$,^,&,*,-) 조합으로입력해주세요.",
        };
    }
    return { result: true, message: "안전한 비밀번호 입니다." };
}

export function idValidation(str) {
    let result = false;
    var rule = /^[0-9a-z!@$^*&-_]{6,20}$/g; // 아이디 정규식
    if (rule.test(str)) {
        result = true;
    }
    return result;
}

export function phoneNumValidation(str) {
    let result = false;
    var rule = /^[0-9]{7,8}$/g;
    if (rule.test(str)) {
        result = true;
    }
    return result;
}

export function bankNumValidation(str) {
    let result = false;
    console.log(str);
    if (str != null && str !== "") {
        var rule = /^(\d{1,})(-(\d{1,})){1,}/g;
        if (rule.test(str)) {
            result = true;
        }
    } else {
        result = true;
    }
    return result;
}

export function phoneNumberValidation(str) {
    let result = false;
    var rule = /^\d{2,3}-\d{3,4}-\d{4}$/;
    if (rule.test(str)) {
        result = true;
    } else if (str == "") {
        result = true;
    }
    return result;
}

export function dateValidation(date1, date2) {
    let result = false;
    var tempstartDate = new Date(date1);
    var tempEndDate = new Date(date2);
    if (tempstartDate != "" && tempEndDate != "") {
        if (tempstartDate.getTime() > tempEndDate.getTime()) {
            result = false;
        } else {
            result = true;
        }
    }
    return result;
}