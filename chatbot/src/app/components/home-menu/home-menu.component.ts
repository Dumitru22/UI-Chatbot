import { Component } from '@angular/core';
import { StockDataService } from '../../stock-data.service';
import { Router } from '@angular/router';
import { catchError, map } from 'rxjs';

@Component({
  selector: 'app-home-menu',
  templateUrl: './home-menu.component.html',
  styleUrl: './home-menu.component.scss'
})
export class HomeMenuComponent {

  chatBotDatas: any;
  errorStatus: string = '';

  constructor(private stockDataService: StockDataService, private router: Router) {}

  ngOnInit() {
    this.stockDataService.getChatbotDatas().pipe(
      map(result => {
        if(result){
          this.chatBotDatas = result
        } else {
          this.errorStatus = 'No Data';
        }}),
      catchError((err): any => {
        if(err){
          this.errorStatus = err.status + ' ' +err.statusText;
        }
      })
    )
    .subscribe();
  }
  
  getStockExchange(data: any){
    this.router.navigate(['/stock'],
      {queryParams: {code: data.code}});
      this.stockDataService.setStock(data.code);
  }
}
