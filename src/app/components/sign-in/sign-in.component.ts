import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { Router } from '@angular/router';
import { auth } from 'firebase/app';
import { SearchService } from 'src/app/services/search.service';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private fAuth: AngularFireAuth, public router: Router,private api:SearchService) { }
  isVerified?: boolean
  error: any
  ngOnInit(): void {
  }
  googleAuth() {
    this.fAuth.auth.signInWithPopup(new auth.GoogleAuthProvider()).then((result) => {
      console.info(result.user)
      this.isVerified = result.user?.emailVerified
      this.api.user=result.user?.displayName
      if (this.isVerified)
        this.router.navigate(['home'])
      else
        console.log("error")
    }).catch(err => console.log(err))

  }
}
