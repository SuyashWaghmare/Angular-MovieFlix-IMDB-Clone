import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { SavedMoviesComponent } from './saved-movies/saved-movies.component';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ChunkPipe } from './saved-movies/chunk.pipe';


@NgModule({
  declarations: [
    AppComponent,
    MovieDetailsComponent,
    SavedMoviesComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ChunkPipe
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
