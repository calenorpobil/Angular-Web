import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User } from "./user/user";

@Component({
  selector: 'app-root',
  imports: [User],
  templateUrl: './app.html',
  standalone: true,
  styles: `
    h1 {
      
    }`
})
export class App {
  city = 'Zaragoza';
  country = 'Spain';
  protected readonly title = signal('angular-22-app');
}
