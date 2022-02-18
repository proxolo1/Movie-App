import { MovieComponent } from './../../components/movie/movie.component';
import { MatDialog } from '@angular/material/dialog';
import { SearchService } from './../../services/search.service';
import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-advanced-search',
  templateUrl: './advanced-search.component.html',
  styleUrls: ['./advanced-search.component.css']
})
export class AdvancedSearchComponent implements OnInit {
    options:string[]=[]
    title:string=""

  constructor(private fb:SearchService,private dialog:MatDialog) { }

  ngOnInit(): void {
   
  }
  movie(event:any){
    this.fb.searchData=event.target.value
  }
  year(event:any){
    this.fb.year=event.target.value
  }
  type(event:any){
    this.fb.type=event.target.value
  }
  movieDetails(){
    this.dialog.open(MovieComponent,{height:"100%",autoFocus:false})
  }
}
