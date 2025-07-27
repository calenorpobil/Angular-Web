import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Games } from "../games/games";

@Component({
  selector: 'app-user',
  imports: [CommonModule, Games],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
  username = 'calenorpobil';
  isLoggedIn = false;
  favGame = '';

  getFavourite(gameName: string) {
    this.favGame = gameName;
    //alert(`Tu juego favorito es: ${this.favGame}`);
  } 

  greet() {
    alert (`Hello, ${this.username}`);
  }
}
