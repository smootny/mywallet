

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { GenerateButtonComponent } from './generate-button/generate-button.component';
import { CommonModule } from '@angular/common';
import { ResultInputComponent } from './result-input/result-input.component';
import { MenuBoxComponent } from './menu-box/menu-box.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
@NgModule({
  declarations: [
    AppComponent,
    GenerateButtonComponent,
    ResultInputComponent,
    MenuBoxComponent,
    ProgressBarComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    ResultInputComponent,
    GenerateButtonComponent,
    MenuBoxComponent
  ]
})
export class AppModule { }