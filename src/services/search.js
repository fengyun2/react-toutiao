// import request from "../utils/request";

const hotWords = {
  "updateTime": "20180702122605",
  "data": [
    {
      "title": "2万斤西瓜被砍烂",
      "detailUrl": "http://www.baidu.com/baidu?cl=3&tn=SE_baiduhomet8_jmjb7mjw&rsv_dl=fyb_top&fr=top" +
          "1000&wd=2%CD%F2%BD%EF%CE%F7%B9%CF%B1%BB%BF%B3%C0%C3",
      "isNew": "false",
      "urlPara": "http://top.baidu.com/detail?b=1&w=2%CD%F2%BD%EF%CE%F7%B9%CF%B1%BB%BF%B3%C0%C3",
      "clicks": 492126
    }, {
      "title": "冯提莫回应会计门",
      "detailUrl": "http://www.baidu.com/baidu?cl=3&tn=SE_baiduhomet8_jmjb7mjw&rsv_dl=fyb_top&fr=top" +
          "1000&wd=%B7%EB%CC%E1%C4%AA%BB%D8%D3%A6%BB%E1%BC%C6%C3%C5",
      "isNew": "true",
      "urlPara": "http://top.baidu.com/detail?b=1&w=%B7%EB%CC%E1%C4%AA%BB%D8%D3%A6%BB%E1%BC%C6%C3%" +
          "C5",
      "clicks": 483691
    }, {
      "title": "柯震东遭抵制",
      "detailUrl": "http://www.baidu.com/baidu?cl=3&tn=SE_baiduhomet8_jmjb7mjw&rsv_dl=fyb_top&fr=top" +
          "1000&wd=%BF%C2%D5%F0%B6%AB%D4%E2%B5%D6%D6%C6",
      "isNew": "false",
      "urlPara": "http://top.baidu.com/detail?b=1&w=%BF%C2%D5%F0%B6%AB%D4%E2%B5%D6%D6%C6",
      "clicks": 477280
    }, {
      "title": "一夜扑出8个点球",
      "detailUrl": "http://www.baidu.com/baidu?cl=3&tn=SE_baiduhomet8_jmjb7mjw&rsv_dl=fyb_top&fr=top" +
          "1000&wd=%D2%BB%D2%B9%C6%CB%B3%F68%B8%F6%B5%E3%C7%F2",
      "isNew": "false",
      "urlPara": "http://top.baidu.com/detail?b=1&w=%D2%BB%D2%B9%C6%CB%B3%F68%B8%F6%B5%E3%C7%F2",
      "clicks": 358397
    }, {
      "title": "驴友太白山野泳",
      "detailUrl": "http://www.baidu.com/baidu?cl=3&tn=SE_baiduhomet8_jmjb7mjw&rsv_dl=fyb_top&fr=top" +
          "1000&wd=%C2%BF%D3%D1%CC%AB%B0%D7%C9%BD%D2%B0%D3%BE",
      "isNew": "false",
      "urlPara": "http://top.baidu.com/detail?b=1&w=%C2%BF%D3%D1%CC%AB%B0%D7%C9%BD%D2%B0%D3%BE",
      "clicks": 326118
    }, {
      "title": "京港澳车祸亲历者",
      "detailUrl": "http://www.baidu.com/baidu?cl=3&tn=SE_baiduhomet8_jmjb7mjw&rsv_dl=fyb_top&fr=top" +
          "1000&wd=%BE%A9%B8%DB%B0%C4%B3%B5%BB%F6%C7%D7%C0%FA%D5%DF",
      "isNew": "false",
      "urlPara": "http://top.baidu.com/detail?b=1&w=%BE%A9%B8%DB%B0%C4%B3%B5%BB%F6%C7%D7%C0%FA%D5%" +
          "DF",
      "clicks": 305536
    }, {
      "title": "加拿大歌手被枪杀",
      "detailUrl": "http://www.baidu.com/baidu?cl=3&tn=SE_baiduhomet8_jmjb7mjw&rsv_dl=fyb_top&fr=top" +
          "1000&wd=%BC%D3%C4%C3%B4%F3%B8%E8%CA%D6%B1%BB%C7%B9%C9%B1",
      "isNew": "false",
      "urlPara": "http://top.baidu.com/detail?b=1&w=%BC%D3%C4%C3%B4%F3%B8%E8%CA%D6%B1%BB%C7%B9%C9%" +
          "B1",
      "clicks": 301149
    }, {
      "title": "李栋旭裴秀智分手",
      "detailUrl": "http://www.baidu.com/baidu?cl=3&tn=SE_baiduhomet8_jmjb7mjw&rsv_dl=fyb_top&fr=top" +
          "1000&wd=%C0%EE%B6%B0%D0%F1%C5%E1%D0%E3%D6%C7%B7%D6%CA%D6",
      "isNew": "false",
      "urlPara": "http://top.baidu.com/detail?b=1&w=%C0%EE%B6%B0%D0%F1%C5%E1%D0%E3%D6%C7%B7%D6%CA%" +
          "D6",
      "clicks": 300474
    }, {
      "title": "西班牙爆冷出局",
      "detailUrl": "http://www.baidu.com/baidu?cl=3&tn=SE_baiduhomet8_jmjb7mjw&rsv_dl=fyb_top&fr=top" +
          "1000&wd=%CE%F7%B0%E0%D1%C0%B1%AC%C0%E4%B3%F6%BE%D6",
      "isNew": "false",
      "urlPara": "http://top.baidu.com/detail?b=1&w=%CE%F7%B0%E0%D1%C0%B1%AC%C0%E4%B3%F6%BE%D6",
      "clicks": 291814
    }, {
      "title": "科比欢迎詹姆斯",
      "detailUrl": "http://www.baidu.com/baidu?cl=3&tn=SE_baiduhomet8_jmjb7mjw&rsv_dl=fyb_top&fr=top" +
          "1000&wd=%BF%C6%B1%C8%BB%B6%D3%AD%D5%B2%C4%B7%CB%B9",
      "isNew": "false",
      "urlPara": "http://top.baidu.com/detail?b=1&w=%BF%C6%B1%C8%BB%B6%D3%AD%D5%B2%C4%B7%CB%B9",
      "clicks": 288665
    }
  ]
}
export const getHotWords = (params = {}) => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve(hotWords), 1000)
  })

  /*   const defaultParams = {
    csrfmiddlewaretoken: undefined
  }
  return request({
    method: "get",
    url: "/baidu_top_words",
    params: {
      ...defaultParams,
      ...params
    }
  }); */
}
