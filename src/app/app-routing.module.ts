import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard, AdminGuard, ClienteGuard, ClientePlusGuard } from './core';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'login', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'register', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },

  // Cliente comum
  {
    path: 'cliente',
    canActivate: [ClienteGuard],
    children: [
      { path: 'chat', loadComponent: () => import('./cliente/ia-chat/ia-chat.component').then(c => c.IaChatComponent) },
      { path: 'perfil', loadComponent: () => import('./cliente/perfil/perfil.component').then(c => c.PerfilComponent) }
    ]
  },

  // Cliente Plus
  {
    path: 'plus',
    canActivate: [ClientePlusGuard],
    children: [
      { path: 'chat', loadComponent: () => import('./cliente-plus/ia-chat-plus/ia-chat-plus.component').then(c => c.IaChatPlusComponent) },
      { path: 'upload', loadComponent: () => import('./cliente-plus/upload/upload.component').then(c => c.UploadComponent) }
    ]
  },

  // Admin
  {
    path: 'admin',
    canActivate: [AdminGuard],
    children: [
      { path: 'dashboard', loadComponent: () => import('./admin/dashboard/dashboard.component').then(c => c.DashboardComponent) }
    ]
  },

  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}