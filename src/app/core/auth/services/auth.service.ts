import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/api/auth';
  private currentUserSubject = new BehaviorSubject<Usuario | null>(null);
  public currentUser$ = this.currentUserSubject.asObservable();

  constructor(private http: HttpClient) {
    this.loadCurrentUser();
  }

  login(email: string, senha: string): Observable<{ token: string; usuario: Usuario }> {
    return this.http.post<{ token: string; usuario: Usuario }>(`${this.apiUrl}/login`, { email, senha }).pipe(
      tap(res => {
        localStorage.setItem('token', res.token);
        this.currentUserSubject.next(res.usuario);
      })
    );
  }

  register(nome: string, email: string, senha: string, tipo: 'cliente' | 'cliente-plus' = 'cliente'): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, { nome, email, senha, tipo });
  }

  logout(): void {
    localStorage.removeItem('token');
    this.currentUserSubject.next(null);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  getUserType(): 'admin' | 'cliente' | 'cliente-plus' | null {
    const user = this.currentUserSubject.value;
    return user ? user.tipo : null;
  }

  private loadCurrentUser(): void {
    const token = this.getToken();
    if (token) {
      // Aqui você pode decodificar o JWT ou fazer uma chamada /me
      // Para simplificar, vamos supor que o backend tem /me
      this.http.get<Usuario>(`${this.apiUrl}/me`).subscribe({
        next: user => this.currentUserSubject.next(user),
        error: () => this.logout()
      });
    }
  }
}