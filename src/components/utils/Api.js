class Api {
  constructor(config) {
    this._url = config.url;
  }
  _check(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject("Произошла ошибка");
    }
  }

  backUser() {
    return fetch(
      `https://serveracypd.netlify.app/.netlify/functions/api/users/backuser`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }
    ).then((res) => {
      return this._check(res);
    });
  }
}

const api = new Api({
  url: "https://serveracypd.netlify.app/.netlify/functions/api",
});

export default api;
