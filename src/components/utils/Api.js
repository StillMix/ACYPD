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
      `http://localhost:3001/users/backuser`,
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
  url: "http://localhost:3001",
});

export default api;
