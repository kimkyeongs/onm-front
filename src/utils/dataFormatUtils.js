export function bizNumFormatter(num, type) {
  var formatNum = "";
  try {
    if (num.length === 10) {
      if (type === 0) {
        formatNum = num.replace(/(\d{3})(\d{2})(\d{5})/, "$1-$2-*****");
      } else {
        formatNum = num.replace(/(\d{3})(\d{2})(\d{5})/, "$1-$2-$3");
      }
    } else {
      formatNum = num;
    }
  } catch (e) {
    formatNum = num;
    console.log(e);
  }
  return formatNum;
}

export function getNowDate(day) {
  const dateInfo = new Date();
  if (day === undefined) {
    return dateInfo.toISOString().substr(0, 10);
  } else {
    var dayOfMonth = dateInfo.getDate();
    dateInfo.setDate(dayOfMonth + day);
    return dateInfo.toISOString().substr(0, 10);
  }
}

export function getMonthDate(month) {
  const dateInfo = new Date();
  dateInfo.setMonth(dateInfo.getMonth() + month);
  return dateInfo.toISOString().substr(0, 10);
}

export function getNowTime() {
  const dateInfo = new Date();
  let hours = dateInfo.getHours(); // 시
  let minutes = dateInfo.getMinutes(); // 분
  let seconds = dateInfo.getSeconds(); // 초
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  const time = hours + ":" + minutes + ":" + seconds;
  console.log(time);
  return time;
}

export function getMinuteItems() {
  const mins = [];
  for (var i = 0; i < 6; i++) {
    const min = i + "0";
    mins.push(min);
  }
  return mins;
}
export function getTimeItems() {
  const times = [];
  for (var i = 0; i < 24; i++) {
    let time = i + "";
    if (time.length < 2) {
      time = "0" + time;
    }
    times.push(time);
  }
  return times;
}
export function phoneNumFormatter(num) {
  if (num != null) {
    num = num.replace(
      /(^02.{0}|^01.{1}|[0-9]{3})([0-9]+)([0-9]{4})/,
      "$1-$2-$3"
    );
  }
  return num;
}

export function dateFormatter_yyyymmdd(value) {
  // 들어오는 value 값이 공백이면 그냥 공백으로 돌려줌
  if (value == "") return "";

  // 현재 Date 혹은 DateTime 데이터를 javaScript date 타입화
  var js_date = new Date(value);

  // 연도, 월, 일 추출
  var year = js_date.getFullYear();
  var month = js_date.getMonth() + 1;
  var day = js_date.getDate();

  // 월, 일의 경우 한자리 수 값이 있기 때문에 공백에 0 처리
  if (month < 10) {
    month = "0" + month;
  }

  if (day < 10) {
    day = "0" + day;
  }

  // 최종 포맷 (ex - '2021-10-08')
  return year + "-" + month + "-" + day;
}

export function dateFormatter(strDate, type) {
  // str Date -> DATE_FORMAT(org_auth_key_exp, '%Y-%m-%d %H:%i:%s')
  let formatDate = "";

  try {
    if (strDate != null && strDate !== "") {
      const year = strDate.substr(0, 4);
      const month = strDate.substr(5, 2);
      const day = strDate.substr(8, 2);
      const hour = strDate.substr(11, 2);
      const minute = strDate.substr(14, 2);
      const second = strDate.substr(17, 2);
      switch (type) {
        case "org_auth_key_exp":
          formatDate = `${year}년${month}월${day}일 ${hour}시${minute}분${second}초`;
          break;
        default:
          formatDate = strDate;
      }
    } else {
      formatDate = strDate;
    }
  } catch (e) {
    formatDate = strDate;
  }
  return formatDate;
}
export function cgBrFormatter(str) {
  if (str != null) {
    str = str.replace(/(?:\r\n|\r|\n)/g, "<br />");
  }
  return str;
}
export function cgOnlyNumFormatter(str) {
  if (str != null) {
    str = str.replace(/[^0-9]/g, "");
  }
  return str;
}

export function objectKeysToCamelCase(object) {
  const lodash = require("lodash");
  let camelCaseObject = lodash.cloneDeep(object);

  if (lodash.isArray(camelCaseObject)) {
    return lodash.map(camelCaseObject, objectKeysToCamelCase);
  } else {
    camelCaseObject = lodash.mapKeys(camelCaseObject, (value, key) => {
      return lodash.camelCase(key);
    });
    // Recursively apply throughout object
    return lodash.mapValues(camelCaseObject, (value) => {
      if (lodash.isPlainObject(value)) {
        return objectKeysToCamelCase(value);
      } else if (lodash.isArray(value)) {
        return lodash.map(value, objectKeysToCamelCase);
      } else {
        return value;
      }
    });
  }
}

export function objectKeysToSnakeCase(object) {
  const lodash = require("lodash");
  let snakeCaseObject = lodash.cloneDeep(object);

  if (lodash.isArray(snakeCaseObject)) {
    return lodash.map(snakeCaseObject, objectKeysToSnakeCase);
  } else {
    snakeCaseObject = lodash.mapKeys(snakeCaseObject, (value, key) => {
      return lodash.snakeCase(key);
    });
    // Recursively apply throughout object
    return lodash.mapValues(snakeCaseObject, (value) => {
      if (lodash.isPlainObject(value)) {
        return objectKeysToSnakeCase(value);
      } else if (lodash.isArray(value)) {
        return lodash.map(value, objectKeysToSnakeCase);
      } else {
        return value;
      }
    });
  }
}

export function useYnFormatter(str) {
  if (str != null && str === "Y") {
    str = "사용";
  } else if (str != null && str === "N") {
    str = "미사용";
  }
  return str;
}

export function getDateDiff(startDate, endDate) {
  const sdt = new Date(startDate);
  const edt = new Date(endDate);
  var dateDiff = Math.ceil(
    (edt.getTime() - sdt.getTime()) / (1000 * 3600 * 24)
  );
  return dateDiff;
}

export function maskingNm(name) {
  let maskingNm = name;
  let maskingLen = maskingNm.length - 1;

  if (maskingNm != null && maskingNm.length > 0) {
    if (maskingLen > 1) {
      let masking = "";
      const firstNm = maskingNm.substring(0, 1);
      const middleNm = maskingNm.substring(1, maskingLen);
      const lastNm = maskingNm.substring(maskingLen, maskingLen + 1);
      for (var i = 0; i < middleNm.length; i++) {
        masking += "*";
      }
      maskingNm = firstNm + masking + lastNm;
    } else {
      if (maskingLen === 0) maskingNm = "*";
      if (maskingLen === 1) maskingNm = maskingNm.substring(0, 1) + "*";
    }
  }

  return maskingNm;
}

export function isNotEmpty(value) {
  if (value === "" || value === null || !value) {
    return false;
  }

  if (value.replace(/^\s+|\s+$/g, "") === "") {
    return false;
  }

  return true;
}
//ex 2022-05-24
export function getThisWeek(value) {
  //특정일자의 해당 Week의 월요일과 토요일을 구한다.
  var week = new Array("일", "월", "화", "수", "목", "금", "토");

  var today = new Date(value);
  var i = today.getDay(); //현재 요일을 구한다.( 0:일요일, 1:월요일, 2:화요일, 3:수요일, 4:목요일, 5:금요일, 6:토요일 )
  if (i >= 0 && i < 7) {
    //현재 요일이 월~일 일때
    var mon = 1 - i;
    var tus = 2 - i;
    var wed = 3 - i;
    var thu = 4 - i;
    var fri = 5 - i;
  }
  var toWeek = [];
  //입력받은 날짜의 해당 Week의 날짜
  var monday = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + mon
  );
  toWeek.push(monday);
  var tuseday = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + tus
  );
  toWeek.push(tuseday);
  var wednesday = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + wed
  );
  toWeek.push(wednesday);
  var thursday = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + thu
  );
  toWeek.push(thursday);
  var friday = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + fri
  );
  toWeek.push(friday);

  var thisWeek = [];
  var data = {};

  toWeek.forEach((items) => {
    data.day = workFormat(items);
    data.week = week[items.getDay()];
    thisWeek.push(data);
    data = {};
  });
  return thisWeek;
}

function workFormat(value) {
  //날짜를 YYYY.MM.DD 형식으로 변경하는 함수
  //Year
  var yy = value.getFullYear();
  //Month
  if (String(value.getMonth() + 1).length == 1) {
    var mm = "0" + (value.getMonth() + 1);
  } else {
    var mm = value.getMonth() + 1;
  }
  //Day
  if (String(value.getDate()).length == 1) {
    var dd = "0" + value.getDate();
  } else {
    var dd = value.getDate();
  }
  var date = String(yy) + "." + String(mm) + "." + String(dd);
  return date;
}
