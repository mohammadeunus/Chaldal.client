import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StockListComponent } from './components/admin/stock-list/stock-list.component';
import { AdminComponent } from './components/admin/admin.component';
import { DashBoardComponent } from './components/admin/dash-board/dash-board.component';
import { UserComponent } from './components/customer/user.component';
import { ProductListComponent } from './components/admin/product/product-list/product-list.component';
import { HomeComponent } from './components/customer/home/home.component';
import { AddProductComponent } from './components/admin/product/add-product/add-product.component';
import { SearchComponent } from './components/customer/search/search.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashBoardComponent },
      { path: 'stock', component: StockListComponent },
      { path: 'product', component: ProductListComponent },
      { path: 'add-product', component: AddProductComponent },
      // Add more admin routes as needed
    ],
  },
  {
    path: 'user',
    component: UserComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'search', component: SearchComponent },
      // Add more user routes as needed
    ],
  },
  {
    path: '',
    pathMatch: 'full',
    component: AdminComponent, // Use the function to determine the component
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
