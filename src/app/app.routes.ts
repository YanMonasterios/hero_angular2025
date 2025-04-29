import { Routes } from '@angular/router';
import { HeroComponent } from './pages/hero/hero.component';

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
      // si el usuario intenta modificar la ruta me llevara a la ruta principal.
      path: '**',
      redirectTo: ''
    }

];


