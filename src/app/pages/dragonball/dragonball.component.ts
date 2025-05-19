import { NgClass } from '@angular/common';
import { Component, computed, signal} from '@angular/core';

interface Character {
  id: number;
  name: string;
  power: number;
} 

@Component({
  selector: 'app-dragonball',
  imports:[],
  templateUrl: './dragonball.component.html',
  styleUrl: './dragonball.component.css'
})
export class DragonballComponent {

  name  = signal('Gohan')
  power = signal(0)

  characters = signal <Character[]> ([
    {id: 1, name: 'Goku', power: 9001},
    {id: 2, name: 'Vegeta', power: 8000},
    {id: 3, name: 'Krilin', power: 3005},
    {id: 4, name: 'Yamcha', power: 500}
  ]);

  addCharacter() {
    console.log(this.name(), this.power())

  }

  // powerClasses = computed(() => {
  //   return {
  //     'text-danger': true,
  //   }
  // }) 


}
