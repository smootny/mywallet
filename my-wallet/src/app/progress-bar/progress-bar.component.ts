import { Component } from '@angular/core';
  
  @Component({
    selector: 'app-progress-bar',
    templateUrl: './progress-bar.component.html',
    styleUrls: ['./progress-bar.component.css']
  })
  export class ProgressBarComponent {
    progressPercent = '';
    finalValue = 0;
    max = 0;
  
    changeWidth() {
      const progress = document.querySelector('.progress-done') as HTMLDivElement;
      const percent = Math.ceil((this.finalValue / this.max) * 100);
      if (isNaN(percent)) {
        progress.style.width = '0%';
        progress.innerText = '';
        this.progressPercent = '';
      } else {
        progress.style.width = `${percent}%`;
        progress.innerText = `${percent}%`;
        this.progressPercent = `${percent}%`;
      }
    }
  }