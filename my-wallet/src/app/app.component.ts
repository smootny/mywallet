import { Component} from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  resultNumber = 0;
  result50 = 0;
  result30 = 0;
  result20 = 0; 
  result!: number;
} 
