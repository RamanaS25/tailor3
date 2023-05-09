import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'tailors',
    loadComponent: () => import('./tailors/tailors.page').then( m => m.TailorsPage)
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then( m => m.HomePage)
  },
  {
    path: 'orders',
    loadComponent: () => import('./orders/orders.page').then( m => m.OrdersPage)
  },
  {
    path: 'orders/create-order',
    loadComponent: () => import('./create-order/create-order.page').then( m => m.CreateOrderPage)
  },
  {
    path: 'stock',
    loadComponent: () => import('./stock/stock.page').then( m => m.StockPage)
  },
  {
    path: 'orders/assign',
    loadComponent: () => import('./assign-to-tailor/assign-to-tailor.page').then( m => m.AssignToTailorPage)
  },
  {
    path: 'login',
    loadComponent: () => import('./components/login/login.component').then( m => m.LoginComponent)
  },
  {
    path: 'tailor-dashboard',
    loadComponent: () => import('./tailor-dashboard/tailor-dashboard.page').then( m => m.TailorDashboardPage)
  },
  {
    path: 'customers',
    loadComponent: () => import('./customers/customers.page').then( m => m.CustomersPage)
  },


];
