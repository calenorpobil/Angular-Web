import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User } from "./user/user";
import { CommonModule } from '@angular/common';
import { Comments } from "./comments/comments";

@Component({
  selector: 'app-root',
  imports: [User, CommonModule, Comments],
  templateUrl: './app.html',
  standalone: true,
  styleUrls: [`./app.css`],
})
export class App {
  city = 'Zaragoza';
  country = 'Spain';
  protected readonly title = signal('angular-22-app');
}
