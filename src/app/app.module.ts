import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StockListComponent } from './components/admin/stock-list/stock-list.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/customer/header/header.component';
import { FooterComponent } from './components/customer/footer/footer.component';
import { SideNavBarComponent } from './components/admin/side-nav-bar/side-nav-bar.component';
import { AdminComponent } from './components/admin/admin.component';
import { UserComponent } from './components/customer/user.component';
import { DashBoardComponent } from './components/admin/dash-board/dash-board.component';
import { AdminHeaderComponent } from './components/admin/admin-header/admin-header.component';
import { HomeComponent } from './components/customer/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductListComponent } from './components/admin/product/product-list/product-list.component';
import { NgChartsModule } from 'ng2-charts';
import { SideNavComponent } from './components/customer/side-nav/side-nav.component';
import { AddProductComponent } from './components/admin/product/add-product/add-product.component';
import { ProductCardComponent } from './components/customer/product/product-card/product-card.component';

@NgModule({
  declarations: [
    AppComponent,
    StockListComponent,
    HeaderComponent,
    FooterComponent,
    SideNavBarComponent,
    AdminComponent,
    UserComponent,
    DashBoardComponent,
    DashBoardComponent,
    AdminHeaderComponent,
    HomeComponent,
    ProductListComponent,
    SideNavComponent,
    AddProductComponent,
    ProductCardComponent,  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
