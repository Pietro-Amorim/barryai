import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IaChatComponent } from './ia-chat/ia-chat.component';
import { PerfilComponent } from './perfil/perfil.component';



@NgModule({
  declarations: [
    IaChatComponent,
    PerfilComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ClienteModule { }
