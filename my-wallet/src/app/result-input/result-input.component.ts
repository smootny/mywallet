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
}

