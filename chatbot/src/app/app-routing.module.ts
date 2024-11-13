import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeMenuComponent } from './components/home-menu/home-menu.component';
import { StockMenuComponent } from './components/stock-menu/stock-menu.component';
import { StockValueComponent } from './components/stock-value/stock-value.component';

const routes: Routes = [
  { path: '', component:  HomeMenuComponent},
  { path: 'stock', component:  StockMenuComponent},
  { path: 'value', component:  StockValueComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
