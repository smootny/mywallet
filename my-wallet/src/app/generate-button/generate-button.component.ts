import { Component, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-button-generate',
  templateUrl: './generate-button.component.html',
  styleUrls: ['./generate-button.component.css']
})


export class GenerateButtonComponent {
  @Output() resultEvent = new EventEmitter<{ resultNumber: number, result50: number, result30: number, result20: number }>();
  @Output() resultSavings = new EventEmitter<{resultat: number}>();
  number = 0;
  @Output() result = new EventEmitter<number>();
  inputValue = 0;

  calculate() {
    const result50 = this.inputValue * 0.5;
    const result30 = this.inputValue * 0.3;
    const result20 = this.inputValue * 0.2;
    this.resultEvent.emit({ resultNumber: this.inputValue, result50, result30, result20 });
  }
}


