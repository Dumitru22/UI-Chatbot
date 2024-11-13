import { Component } from '@angular/core';
import { StockDataService } from '../../stock-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stock-menu',
  templateUrl: './stock-menu.component.html',
  styleUrl: './stock-menu.component.scss'
})
export class StockMenuComponent {

  stockData: any;

  constructor(private stockDataService: StockDataService, private router: Router) {
  }

  ngOnInit() {
    this.stockDataService.getChatbotDatas().subscribe((result: any) => {
        this.stockData = result.find((obj: any) => {
          return obj.code === this.stockDataService.getStock();
        })
    })
  }

  redirectToHome(){
    this.router.navigate([''])
  }
  
  getValueExchange(data: any){
    this.router.navigate(['/value'],
      {queryParams: {code: data.code}});
      this.stockDataService.setValue(data);
  }
}
