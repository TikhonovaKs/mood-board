class PhotoApi {
  constructor(config) {
    this._url = config.url;
    this._headers = config.headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject('An error has occured');
  }

  searchPhoto(keyword) {
    return fetch(`${this._url}search?query=${keyword}&per_page=40`, {
      method: 'GET',
      headers: this._headers,
    }).then(this._checkResponse);
  }
}

const photoApi = new PhotoApi({
  url: 'https://api.pexels.com/v1/',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: 'zq95MtbKLDwXRldJIq1QXrV0hhR99pfSwHVkWZiQO6byYJyvH1OYv77Q',
  },
});

export default photoApi;
