import { Component } from '@angular/core';

@Component({
  selector: 'app-poker-table',
  standalone: true,
  imports: [],
  templateUrl: './poker-table.component.html',
  styleUrl: './poker-table.component.scss'
})
export class PokerTableComponent {
  public clickMe() {
    while (10) {
      alert('Hello!');
    }
  }
}
