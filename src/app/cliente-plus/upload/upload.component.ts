import { Component } from '@angular/core';
import { IaService } from '../../core/services/ia.service';

@Component({
  selector: 'app-upload',
  template: `
    <h2>Enviar Arquivo para Análise</h2>
    <input type="file" (change)="onFileSelected($event)" multiple />
    <button (click)="upload()" [disabled]="!arquivo">Analisar Arquivo</button>
    <div *ngIf="resultado">{{ resultado }}</div>
  `
})
export class UploadComponent {
  arquivo: File | null = null;
  resultado: string = '';

  constructor(private iaService: IaService) {}

  onFileSelected(event: any) {
    this.arquivo = event.target.files[0];
  }

  upload() {
    if (!this.arquivo) return;
    this.iaService.enviarPergunta('Analise este arquivo', this.arquivo).subscribe({
      next: res => this.resultado = res.texto,
      error: err => console.error('Erro no upload:', err)
    });
  }
}