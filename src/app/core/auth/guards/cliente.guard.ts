import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class ClienteGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    const tipo = this.authService.getUserType();
    if (tipo === 'cliente' || tipo === 'cliente-plus') return true;
    this.router.navigate(['/login']);
    return false;
  }
}