import { Component } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MovieComponent {
  //model
  public movie={ //json object
    movieId:10,
    movieName:"Shawshank Redemption",
    movieRating:5,
    releaseYear:1994,
    isAvailable:false,
    movieThumbnail:'assets/shawshank.jpg'
  }
}