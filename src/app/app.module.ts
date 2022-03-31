import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModulesComponent } from './modules/modules.component';
import { CharacterComponent } from './modules/character/character.component';
import { StartComponent } from './modules/start/start.component';
import { GalleryComponent } from './modules/gallery/gallery.component';


import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './modules/card/card.component';
import { HomeComponent } from './modules/home/home.component';
import { NavbarComponent } from './modules/navbar/navbar.component';
import { EpisodesComponent } from './modules/episodes/episodes.component';
import { DomSeguroPipe } from './pipes/dom-seguro.pipe';
import { FooterComponent } from './modules/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    ModulesComponent,
    CharacterComponent,
    StartComponent,
    GalleryComponent,


    FilterPipe,
     CardComponent,
     HomeComponent,
     NavbarComponent,
     EpisodesComponent,
     DomSeguroPipe,
     FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
