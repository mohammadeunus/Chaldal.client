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
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductListComponent } from './components/admin/product/product-list/product-list.component';
import { NgChartsModule } from 'ng2-charts';
import { SideNavComponent } from './components/customer/side-nav/side-nav.component';
import { AddProductComponent } from './components/admin/product/add-product/add-product.component';
import { ProductCardComponent } from './components/customer/product/product-card/product-card.component';
import { SuggestedProductsComponent } from './components/customer/product/suggested-products/suggested-products.component';
import { AdvertisementComponent } from './components/shared/advertisement/advertisement.component';
import { AllProductsComponent } from './components/customer/product/all-products/all-products.component';
import { CarouselModule } from 'primeng/carousel';
import { HomeComponent } from './components/customer/home/home.component';
import { PageNavigationComponent } from './components/shared/page-navigation/page-navigation.component';
import { PaginatorModule } from 'primeng/paginator';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/shared/login/login.component';
import { RegistrationComponent } from './components/shared/registration/registration.component';
import { CheckboxModule } from 'primeng/checkbox';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { CartComponent } from './components/customer/cart/cart.component';
import { SearchComponent } from './components/customer/search/search.component';
import { FormsModule } from '@angular/forms';
import { ErrorComponent } from './components/shared/error/error.component';
import { ShowProductsComponent } from './components/customer/product/show-products/show-products.component';

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
    SuggestedProductsComponent,
    AdvertisementComponent,
    AllProductsComponent,
    PageNavigationComponent,
    LoginComponent,
    RegistrationComponent,
    CartComponent,
    SearchComponent,
    ErrorComponent,
    ShowProductsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    NgChartsModule,
    CarouselModule,
    PaginatorModule,
    SidebarModule,
    ButtonModule,
    BrowserAnimationsModule,
    CheckboxModule,
    AvatarGroupModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
