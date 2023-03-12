import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-result-input',
  templateUrl: './result-input.component.html',
  styleUrls: ['./result-input.component.css']
})

export class ResultInputComponent {
  @Input() number = 0;
  @Input() result50 = 0;
  @Input() result30 = 0;
  @Input() result20 = 0;
  optionsNeeds: string[] = ['Mieszkanie', 'Prąd', 'Internet', 'Telefon', 'Paliwo'];
  optionsWants: string[] = ['Ciuchy', 'Restauracja', 'Kino', 'Impreza', 'Narkotyki'];
  optionsSavings: string[] = ['Raty', 'Krypto', 'Skarbonka', 'Na wakacje', 'Emerytura']
  selectedOptionNeeds = ' ';
  selectedOptionWants = ' ';
  selectedOptionSavings = ' ';
  newOptionNeeds = '';
  newOptionWants = '';
  newOptionSavings = '';
  allResults = 0;
  substractionSavings!: number;
  substractionNeeds!: number;
  substractionWants!: number;

  
  
  subtractNeeds() {
    if (this.result50) {
      this.result50 -= this.substractionNeeds;
      this.allResults = this.result20 + this.result30 + this.result50

    }
  }
  subtractWants() {
    if (this.result30) {
      this.result30 -= this.substractionWants;
      this.allResults = this.result20 + this.result30 + this.result50

    }
  }
 
  subtractSavings() {
    if (this.result20) {
      this.result20 -= this.substractionSavings;
      this.allResults = this.result20 + this.result30 + this.result50;
      const paragraph = document.getElementById('total-balance');
      if (paragraph) {
        if (this.allResults < 0) {
          paragraph.style.color = 'red';
        } else {
          paragraph.style.color = '#06D6A0';
        }
      }
    }
  }
  onSelectChange() {
    if (this.selectedOptionNeeds || this.selectedOptionWants || this.selectedOptionSavings === 'add-new-option') {
      this.newOptionNeeds || this.newOptionWants || this.newOptionSavings;
    }
  }

  addNewOptionNeeds() {
    if (this.newOptionNeeds && !this.optionsNeeds.includes(this.newOptionNeeds)) {
      this.optionsNeeds.push(this.newOptionNeeds);
      this.selectedOptionNeeds = this.newOptionNeeds;
    }
  }
  addNewOptionWants() {
    if (this.newOptionWants && !this.optionsWants.includes(this.newOptionWants)) {
      this.optionsWants.push(this.newOptionWants);
      this.selectedOptionWants = this.newOptionWants;
    }
  }
  addNewOptionSavings() {
    if (this.newOptionSavings && !this.optionsSavings.includes(this.newOptionSavings)) {
      this.optionsSavings.push(this.newOptionSavings);
      this.selectedOptionSavings = this.newOptionSavings;
    }
  }}