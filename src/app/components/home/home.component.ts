

import { SearchService } from './../../services/search.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MovieComponent } from '../movie/movie.component';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  options: string[] = []

  constructor(public searchService: SearchService, private fb: FormBuilder, private dialog: MatDialog ) {
  
   }
  formGroup!: FormGroup
  search!: string
  count = 0
  ngOnInit(): void {
    this.formGroup = this.fb.group({ 'ajay': [''] })
    this.formGroup.get('ajay')?.valueChanges.subscribe(data => {
      console.log(data)

      this.searchService.getMovieTitle(data).subscribe(i => {
        let j = 0
        while (i.Search[j].Title != null) {
          this.options[j] = i.Search[j++].Title
        }
      })
      this.search = data
    })


  }
  openNav() {
    const element = <HTMLElement>document.getElementById("mySidenav")
    const main = <HTMLElement>document.getElementById("main")
    if (this.count == 0) {
      element.style.width = "250px"

      this.count++
    }
    else {
      element.style.width = "0"
      this.count = 0
    }
  }
  closeNav() {
    const element = <HTMLElement>document.getElementById("mySidenav")
    element.style.width = "0"
  }
  movieDetails() {
    this.searchService.searchData = this.search
    this.dialog.open(MovieComponent, { height: "100%", autoFocus: false })
  }
 
}
