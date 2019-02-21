import { HttpClient } from 'aurelia-fetch-client';
export class ClientFetch {
  private client: HttpClient;

  constructor() {
    this.client = new HttpClient();
    this.client.configure(httpConfig => {
      httpConfig.withBaseUrl('http://localhost:3000/')
        .withInterceptor({
          request(request) {
            console.log(`Requesting ${request.method} ${request.url}`);
            return request;
          }
        })
        .withInterceptor({
          response(response) {
            console.log(`Responded with status: ${response.status} ${response.statusText}.`);
            return response;
          }
        });
    });
  }

  public getData(endpoint: string, input: string, viewModel: any) {
    this.client.fetch(endpoint + '/' + input, {
      method: 'get',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => {
      if (res.status === 200) {
        res.json().then(body => {
          viewModel.returnFetchResponse(endpoint, body, false);
        });
      } else {
        if (res.status === 404)
          viewModel.returnFetchResponse(endpoint, "No data found for given input.", true);
        else
          viewModel.returnFetchResponse(endpoint, "There was an issue with the server. Status code: " + res.status, true);
        console.log(res.status);
      }
    }, reject => {
      viewModel.returnFetchResponse(endpoint, "There was a problem connecting to the server.", true);
      console.log("HTTP Client Error: ", reject);
    });
  }
}
