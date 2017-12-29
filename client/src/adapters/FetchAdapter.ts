export class FetchAdapter {
  BASE_URL: string;
  headers: Headers;
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
    this.headers = new Headers();
    this.headers.append("Content-Type", "application/json");
  }

  post(path: string, body: object) {
    return fetch(this.BASE_URL + path, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(body)
    });
  }
}