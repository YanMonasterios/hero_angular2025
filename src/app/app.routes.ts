import { Routes } from '@angular/router';
import { HeroComponent } from './pages/hero/hero.component';
import { DragonballComponent } from './pages/dragonball/dragonball.component';

export const routes: Routes = [

    {
        path: '',
        component: HeroComponent
    },
    {
      path: 'hero',
      component: HeroComponent
    },
    {
      path: 'dragonball',
      component: DragonballComponent
    },
    {
      // si el usuario intenta modificar la ruta me llevara a la ruta principal.
      path: '**',
      redirectTo: ''
    }

];


