import { Component, OnInit } from '@angular/core';
import { OnboardService } from '../../services/onboard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message = "";
  error = "";
  //login = new Onboard();
  login : any;

  constructor(private onboardservice: OnboardService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(loginform){
    console.log(loginform);
    this.onboardservice.login(loginform.value).subscribe(
      ( data : any ) => { 
        console.log(data);
        if(data['status'] == 1){ 
          localStorage.setItem('isLoggedIn', "true");
          localStorage.setItem('Authorization', data['data'][0]['Authorization']);
          localStorage.setItem('User_info', data['data'][0]['userid']);
          this.router.navigate(['/admin']);
        } else {
          this.message = data['message']; 
        }
      },
      error => this.error = error
    );
  }




}

 