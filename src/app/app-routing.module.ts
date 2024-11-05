// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { SavedMoviesComponent } from './saved-movies/saved-movies.component';

const routes: Routes = [
  { path: '', component: MovieDetailsComponent },
  { path: 'saved', component: SavedMoviesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
