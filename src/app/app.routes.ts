import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GameDetailsComponent } from './game-details/game-details.component';
import { HitterDetailsComponent } from './hitter-details/hitter-details.component';

export const routes: Routes = [

  {
    path:'', component: HomeComponent, title:'home page'
  },
  {
    path:'gameDetails/:id', component: GameDetailsComponent, title:'Game Details'
  },
  {
    path:'hitterDetails/:id', component: HitterDetailsComponent, title:'Hitter Details'
  }
];
