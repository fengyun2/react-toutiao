import request from "../utils/request";

export const getNews = (params = {}) => {
  const defaultParams = {
    tag: "__all__",
    ac: "wap",
    count: 20,
    format: "json_raw",
    as: "A1A5DB030802C21",
    cp: "5B3872BC72E11E1",
    min_behot_time: 0
  };
  return request({
    method: "get",
    url: "/list",
    params: {
      ...defaultParams,
      ...params
    }
  });
};

export const getArticle = (id = null) => {
  return request({
    method: "get",
    url: `/i${id}/info/`,
    params: {
      i: id
    }
  });
}
