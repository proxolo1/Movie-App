import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    setTimeout(()=>{
      this.router.navigate(['signin'])
    },10000)
    this.move()
  }
  move(){
    let width=1
    const element=<HTMLElement>document.getElementById("indicator")
    setInterval(()=>{
       if(width>=1&&width<=100){
        width++
        element.style.width=width+"%"
    }
 
    },100)
   
  }
}
