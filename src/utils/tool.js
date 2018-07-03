import moment from 'moment'

export const isNumber = (num) => {
  return Object
    .prototype
    .toString
    .call(num) === "[object Number]"
}

export const dateFormat = (time) => {
  if (isNumber(time)) {
    time = time * 1000
  }
  // moment.js只能正确转换毫秒级和字符串时间
  return moment(time)
    .startOf('mimute')
    .fromNow()
}

/**
 * 获取url参数
 * @param {*string} name
 */
export const GetQueryString = (name) => {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  var r = window
    .location
    .search
    .substr(1)
    .match(reg);
  if (r != null)
    return unescape(r[2]);
  return null;
}

/**
 * 修改url参数
 */
export const updateURLParam = (url, param, paramVal) => {
  var newAdditionalURL = "";
  var tempArray = url.split("?");
  var baseURL = tempArray[0];
  var additionalURL = tempArray[1];
  var temp = "";
  if (additionalURL) {
    tempArray = additionalURL.split("&");
    for (var i = 0; i < tempArray.length; i++) {
      if (tempArray[i].split('=')[0] !== param) {
        newAdditionalURL += temp + tempArray[i];
        temp = "&";
      }
    }
  }

  var rows_txt = temp + "" + param + "=" + paramVal;
  return baseURL + "?" + newAdditionalURL + rows_txt;
}
