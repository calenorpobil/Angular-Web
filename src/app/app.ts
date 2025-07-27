import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User } from "./user/user";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [User, CommonModule],
  templateUrl: './app.html',
  standalone: true,
  styles: ``
})
export class App {
  city = 'Zaragoza';
  country = 'Spain';
  protected readonly title = signal('angular-22-app');
}
