import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [
    RouterLink, RouterLinkActive
  ],
  templateUrl: './navbar.component.html'
})

// routerlinkactive permite señalar que a nivel de interfaz nos muestra en que seccion o componente estamos
export class NavbarComponent {

}
