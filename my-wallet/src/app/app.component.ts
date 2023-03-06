import { Component} from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  currentBlock: { size: string, color: string } | null = null;
  showBlock = false;
  resultNumber = 0;
  result50 = 0;
  result30 = 0;
  result20 = 0;
  
  // Funkcja generująca losową wielkość bloku w pikselach
  generateBlockSize(): string {
    const size = Math.floor(Math.random() * 100) + 50;
    return size + 'px';
  }
  
  // Funkcja generująca losowy kolor w formacie HEX
  generateBlockColor(): string {
    const color = Math.floor(Math.random() * 16777215).toString(16);
    return '#' + color;
  }
  
  // Funkcja generująca blok w losowym rozmiarze i kolorze i ustawiająca go jako aktualny blok
  generateBlock(): void {
    const size = this.generateBlockSize();
    const color = this.generateBlockColor();
    this.currentBlock = { size, color };
    this.showBlock ? this.showBlock = false : this.showBlock = true;
  }
  
  // Funkcja usuwająca aktualny blok i ustawiająca zmienną showBlock na wartość false
  hideBlock(): void {
    this.currentBlock = null;
    this.showBlock = false;
  }
  
  
}
