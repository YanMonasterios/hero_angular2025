import { UpperCasePipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

@Component({
  imports: [UpperCasePipe],
  templateUrl: './hero.component.html',
  styles: ``
})
export class HeroComponent {



  name = signal('Ironman');
  age = signal(45);

  // signal computada
  heroDescription = computed(() =>
  {
    // logica que me permite regresar la descripcion 
    const description = `${this.name()} - ${this.age()}`
    return description;
  });

  capitalizedName = computed(() => 
    this.name().toUpperCase()
  );

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
