const delay = timeout => {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject('请求超时'), timeout * 1000);
  });
};

export function httpGet(url, params = {}, timeout) {
  const paramArr = [];

  if (Object.keys(params).length !== 0) {
    for (var key in params) {
      paramArr.push(`${key}=${params[key]}`);
    }
  }

  const urlStr = `${url}?${paramArr.join('&')}`;

  if (timeout == undefined) {
    return fetch(urlStr);
  } else {
    return Promise.race([fetch(urlStr), delay(timeout)]);
  }
}
