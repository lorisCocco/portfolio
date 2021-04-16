import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

type Theme = 'light' | 'dark';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentTheme: Theme = 'light';
  title = 'app';

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.document.body.classList.add(this.currentTheme);
  }
  switchTheme(newTheme: Theme): void {
    this.document.body.classList.replace(this.currentTheme, newTheme);
    this.currentTheme = newTheme;
  }
}
