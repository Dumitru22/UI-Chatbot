import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StockDataService } from './stock-data.service';
import { provideHttpClient } from '@angular/common/http';
import { HomeMenuComponent } from './components/home-menu/home-menu.component';
import { StockMenuComponent } from './components/stock-menu/stock-menu.component';
import { StockValueComponent } from './components/stock-value/stock-value.component';
import { HeaderComponent } from './ui-components/header/header.component';
import { ErrorPageComponent } from './ui-components/error-page/error-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeMenuComponent,
    StockMenuComponent,
    StockValueComponent,
    HeaderComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [StockDataService, provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
