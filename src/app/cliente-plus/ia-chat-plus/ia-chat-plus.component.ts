import { Component } from '@angular/core';
import { IaService } from '../../core/services/ia.service';

@Component({
  selector: 'app-ia-chat',
  template: `
    <div class="chat-container">
      <div class="messages" *ngFor="let msg of historico">
        <p><strong>Você:</strong> {{ msg.pergunta }}</p>
        <p><strong>BarryAI:</strong> {{ msg.resposta }}</p>
      </div>

      <form (ngSubmit)="enviar()">
        <input [(ngModel)]="pergunta" placeholder="Pergunte algo à BarryAI..." required />
        <input type="file" (change)="onFileSelected($event)">
        <button type="submit">Enviar</button>
      </form>
    </div>
  `,
  styles: [`
    .chat-container { max-width: 800px; margin: 2rem auto; }
    .messages { margin-bottom: 1rem; padding: 1rem; background: white; border-radius: 8px; }
  `]
})
export class IaChatComponent {
  pergunta = '';
  historico: any[] = [];

  constructor(private iaService: IaService) {
    this.carregarHistorico();
  }

  carregarHistorico() {
    this.iaService.getHistorico().subscribe(data => this.historico = data);
  }

  enviar() {
    this.iaService.enviarPergunta(this.pergunta).subscribe({
      next: resposta => {
        this.historico.push({ pergunta: this.pergunta, resposta: resposta.texto });
        this.pergunta = '';
      },
      error: err => console.error('Erro:', err)
    });
  }
}