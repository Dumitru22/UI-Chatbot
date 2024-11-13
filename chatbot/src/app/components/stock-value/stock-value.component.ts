import { Component } from '@angular/core';
import { StockDataService } from '../../stock-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stock-value',
  templateUrl: './stock-value.component.html',
  styleUrl: './stock-value.component.scss'
})
export class StockValueComponent {
  stockValue: any = {};
  errorStatus: string = '';

  constructor(private stockDataService: StockDataService, private router: Router){}

  ngOnInit() {
    let data = this.stockDataService.getValue();
    if(data.code) {
      this.stockValue = {
        price: data?.price,
        stockName: data?.stockName
      }
    } else {
      this.errorStatus = 'Something went wrong, please try again'
    }
    
  }

  goToMainMenu(){
    this.router.navigate([''])
  }

  goToStockMenu(){
    this.router.navigate(['/stock'], {queryParams: {code: this.stockDataService.getStock()}})
  }
}
