import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ProductsListComponent } from './products/products-list.component';
import { SummaryComponent } from './home/summary.component';
import { SetupComponent } from './config/setup.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ProductsListComponent,
    SummaryComponent,
    SetupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
