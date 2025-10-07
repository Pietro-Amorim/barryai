import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IaChatPlusComponent } from './ia-chat-plus/ia-chat-plus.component';
import { UploadComponent } from './upload/upload.component';



@NgModule({
  declarations: [
    IaChatPlusComponent,
    UploadComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ClientePlusModule { }
