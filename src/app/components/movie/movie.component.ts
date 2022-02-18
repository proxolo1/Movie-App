import { SearchService } from './../../services/search.service';
import { Component, OnInit } from '@angular/core';
import { MovieModel } from 'src/app/movie-model';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  movie:MovieModel=new MovieModel
  constructor(private searchService:SearchService) { }

  ngOnInit(): void {
   this.searchService.getMoviesDetails().subscribe(data=>{
     console.log(data)
     this.movie.Title=data.Title
      this.movie.author=data.Writer
      this.movie.director=data.Director
      this.movie.plot=data.Plot
      this.movie.poster=data.Poster
      this.movie.awards=data.Awards
      this.movie.boxOffice=data.BoxOffice
      this.movie.country=data.Country
      this.movie.genre=data.Genre
      this.movie.type=data.Type
      this.movie.imdbRating=data.imdbRating
      this.movie.rating=data.Ratings
      this.movie.released=data.Released
      this.movie.metaScore=data.Metascore
      this.movie.year=data.Year
      this.movie.Actors=data.Actors
   })
  }
   
}
