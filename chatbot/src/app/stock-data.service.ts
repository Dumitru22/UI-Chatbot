import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockDataService {
  url: string = 'assets/chatbotStockData.json';
  code: string = '';
  value: any = {};

  constructor(private http: HttpClient) {}

  public getChatbotDatas(): Observable<any> {
    return this.http.get(this.url);
  }

  public setStock(code: string) {
    this.code = code;
  }

  public getStock() {
    return this.code;
  }

  public setValue(code: any) {
    this.value = code;
  }

  public getValue() {
    return this.value;
  }
}
