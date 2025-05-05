import { Component, signal} from '@angular/core';

interface Character {
  id: number;
  name: string;
  power: number;
} 

@Component({
  selector: 'app-dragonball',
  imports: [],
  templateUrl: './dragonball.component.html',
  styleUrl: './dragonball.component.css'
})
export class DragonballComponent {

  characters = signal <Character[]> ([
    {id: 1, name: 'Goku', power: 9001},
    {id: 1, name: 'Vegeta', power: 8000},
    {id: 1, name: 'Krilin', power: 3005}
  ]);



}
