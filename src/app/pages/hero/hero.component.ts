import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  templateUrl: './hero.component.html',
  styles: ``
})
export class HeroComponent {



  name = signal('Ironman');
  age = signal(45);

  getHeroDescription() {
    return `${ this.name() } - ${ this.age() }`;

    
    }

  changeHero () {

    // this.name.update((value) => 'Spiderman');
    // this.age.update((value) => 22 );

    this.name.set('Spiderman');
    this.age.set(22);

  }

  resetForm() {
    this.name.set('Ironman');
    this.age.set(45);
  }

  changeAge() {
    this.age.set(60);
    }

}
