import { Component, Input, Output, EventEmitter } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent {

  
  @Input() movieDetails: any;
  @Output() saveMovie: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  fetchMovieDetails(movieName: string) {
    const apiKey = 'a37e54e6';
    const encodedMovieName = encodeURIComponent(movieName);

    axios.get(`https://www.omdbapi.com/?t=${encodedMovieName}&apikey=${apiKey}`)
      .then(response => {
        const movieDetails = response.data;
        this.fetchActors(movieDetails.imdbID).then(cast => {
          movieDetails.actors = cast;
          this.movieDetails = movieDetails;
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

  fetchActors(movieId: string): Promise<any[]> {
    const apiKey = '17c477a09042e20bb94f10790d50376b';

    return axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}`)
      .then(response => {
        const cast = response.data.cast;
        return cast;
      })
      .catch(error => {
        console.error(error);
        return [];
      });
  }

  getImageUrl(path: string): string {
    if (path) {
      return `https://image.tmdb.org/t/p/w500/${path}`;
    }
    return '';
  }

  onSaveMovie() {
    this.saveMovie.emit(this.movieDetails);
  }
}
