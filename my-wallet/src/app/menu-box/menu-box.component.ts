import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu-box',
  templateUrl: './menu-box.component.html',
  styleUrls: ['./menu-box.component.css']
})
export class MenuBoxComponent {
  optionsNeeds: string[] = ['Mieszkanie', 'Prąd', 'Internet', 'Telefon', 'Paliwo'];
  optionsWants: string[] = ['Ciuchy', 'Restauracja', 'Kino', 'Impreza', 'Narkotyki'];
  optionsSavings: string[] = ['Raty', 'Krypto', 'Skarbonka', 'Na wakacje', 'Emerytura']
  selectedOption = ' ';
  newOption = '';
  @Input() result20 = 0;
  @Input() resultNumber = 0;
  @Input() number = 0;
  @Output() resultEvent = new EventEmitter<{ resultNumber: number, result50: number, result30: number, result20: number }>();



  onSelectChange() {
    if (this.selectedOption === 'add-new-option') {
      this.newOption = '';
    }
  }

  addNewOptionNeeds() {
    if (this.newOption && !this.optionsNeeds.includes(this.newOption)) {
      this.optionsNeeds.push(this.newOption);
      this.selectedOption = this.newOption;
    }
  }
  addNewOptionWants() {
    if (this.newOption && !this.optionsWants.includes(this.newOption)) {
      this.optionsWants.push(this.newOption);
      this.selectedOption = this.newOption;
    }
  }
  addNewOptionSavings() {
    if (this.newOption && !this.optionsSavings.includes(this.newOption)) {
      this.optionsSavings.push(this.newOption);
      this.selectedOption = this.newOption;
    }
  }
  substractSavings() {
          const inputElement = document.getElementById('numberInput') as HTMLInputElement;
      if (inputElement != null) {
        const subtractedValue = Number(inputElement.value);
        const currentResults = {
          resultNumber: this.number,
          result50: this.number * 0.5,
          result30: this.number * 0.3,
          result20: this.number * 0.2
        };
        const updatedResult = {
          resultNumber: this.number - subtractedValue,
          result50: (this.number - subtractedValue) * 0.5,
          result30: (this.number - subtractedValue) * 0.3,
          result20: (this.number - subtractedValue) * 0.2
        };
        this.number -= subtractedValue;
        this.resultEvent.emit(updatedResult);
      }
    }
  }