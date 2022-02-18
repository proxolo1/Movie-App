import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  searchData:string=""
  year!:number
  type:string=""
  user:any
  constructor(private http:HttpClient) { }
  
  url="https://www.omdbapi.com/?apikey=d04c9399&plot=full&t="
  

  getMoviesDetails():Observable<any>{
    console.log(this.searchData)
    return this.http.get( `${this.url}${this.searchData}&y=${this.year}&type=${this.type}`)
  }
  getMovieTitle(data:string):Observable<any>{
    let url1="https://www.omdbapi.com/?apikey=d04c9399&plot=full&s="+data
    return this.http.get(url1)
  }
}
