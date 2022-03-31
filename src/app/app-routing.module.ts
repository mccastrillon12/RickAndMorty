import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './modules/card/card.component';

import { CharacterComponent } from './modules/character/character.component';
import { GalleryComponent } from './modules/gallery/gallery.component';
import { HomeComponent } from './modules/home/home.component';
import { StartComponent } from './modules/start/start.component';

const routes: Routes = [
  {
    path: 'start',
    component: StartComponent
  },

  {
    path: 'gallery',
    component: GalleryComponent
  },
  {
    path: 'card/:id',
    component: CardComponent
  },
  {
    path: 'character',
    component: CharacterComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '**',
    redirectTo: 'start'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
