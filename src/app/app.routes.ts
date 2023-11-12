import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'tailors',
    loadComponent: () => import('./pages/tailors/tailors.page').then( m => m.TailorsPage)
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then( m => m.HomePage)
  },
  {
    path: 'orders',
    loadComponent: () => import('./pages/orders/orders.page').then( m => m.OrdersPage)
  },
  {
    path: 'orders/create-order',
    loadComponent: () => import('./pages/create-order/create-order.page').then( m => m.CreateOrderPage)
  },
  {
    path: 'stock',
    loadComponent: () => import('./pages/stock/stock.page').then( m => m.StockPage)
  },
  {
    path: 'orders/assign',
    loadComponent: () => import('./pages/assign-to-tailor/assign-to-tailor.page').then( m => m.AssignToTailorPage)
  },
  {
    path: 'login',
    loadComponent: () => import('./components/login/login.component').then( m => m.LoginComponent)
  },
  {
    path: 'tailor-dashboard',
    loadComponent: () => import('./pages/tailor-dashboard/tailor-dashboard.page').then( m => m.TailorDashboardPage)
  },
  {
    path: 'customers',
    loadComponent: () => import('./pages/customers/customers.page').then( m => m.CustomersPage)
  },
  {
    path: 'customer-dashboard',
    loadComponent: () => import('./pages/cus/customer-dashboard/customer-dashboard.page').then( m => m.CustomerDashboardPage)
  },  {
    path: 'final-order',
    loadComponent: () => import('./pages/final-order/final-order.page').then( m => m.FinalOrderPage)
  },

  




];
