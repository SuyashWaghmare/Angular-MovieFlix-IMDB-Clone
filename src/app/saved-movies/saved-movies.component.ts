import { Component, Input, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieDetailsComponent } from '../movie-details/movie-details.component';

@Component({
  selector: 'app-saved-movies',
  templateUrl: './saved-movies.component.html',
  styleUrls: ['./saved-movies.component.css']
})
export class SavedMoviesComponent {
  @Input() savedMovies!: any[];
  @ViewChild(MovieDetailsComponent) movieDetailsComponent!: MovieDetailsComponent;

  constructor(private http: HttpClient) { }

  saveMovie(movieDetails: any) {
    this.savedMovies.push(movieDetails);

    const savedMoviesData = JSON.stringify(this.savedMovies); // Convert the array to a JSON string

    this.http.post('http://localhost:3000/movies', savedMoviesData)
      .subscribe(response => {
        console.log('Movie saved successfully');
      }, error => {
        console.error('Error saving movie:', error);
      });
  }

  fetchMovieDetails(movie: any) {
    this.movieDetailsComponent.fetchMovieDetails(movie.Title);
  }

  // Add the getImageUrl method here by accessing it through movieDetailsComponent
  getImageUrl(path: string): string {
    return this.movieDetailsComponent.getImageUrl(path);
  }
  
}
