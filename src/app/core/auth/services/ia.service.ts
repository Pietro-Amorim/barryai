import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class IaService {
  private apiUrl = 'http://localhost:3000/api/ia';

  enviarPergunta(pergunta: string, arquivo?: File): Observable<any> {
    const formData = new FormData();
    formData.append('pergunta', pergunta);
    if (arquivo) formData.append('arquivo', arquivo);

    return this.http.post(`${this.apiUrl}/responder`, formData);
  }

  getHistorico(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/historico`);
  }
}