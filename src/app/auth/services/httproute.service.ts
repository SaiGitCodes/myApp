import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttprouteService {

  apiurl = environment.apiURL;

  constructor(private httpService: HttpClient) { }

  getMethod(url: string) {
    return this.httpService.get(this.apiurl + 'v1/' + url);
  }

  postMethod(url: string, data: any) {
    console.log('inside post method');
    return this.httpService.post(this.apiurl + 'v1/' + url, data);
  }

  getjsonData(url: string) {
    console.log('inside getjson method');
    return this.httpService.get('./assets/' + url);
  }
}
