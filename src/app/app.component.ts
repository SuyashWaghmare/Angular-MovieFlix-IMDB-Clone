import { Component, ViewChild } from '@angular/core';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { SavedMoviesComponent } from './saved-movies/saved-movies.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(MovieDetailsComponent)
  movieDetailsComponent!: MovieDetailsComponent;

  @ViewChild(SavedMoviesComponent)
  savedMoviesComponent!: SavedMoviesComponent;

  movieName: string = '';
  movieDetails: any;
  savedMovies: any[] = [];

  showSavedMoviesFlag: boolean = false;


  showSavedMovies() {
    this.showSavedMoviesFlag = !this.showSavedMoviesFlag;
  }







}
