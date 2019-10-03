import { Component, OnInit } from '@angular/core';
import { OnboardService } from '../../services/onboard.service';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  
  public loginuserInfo : any = {}; 
  
  constructor(private onboardservice: OnboardService, private router: Router, private userservice : UsersService) { }

  ngOnInit() {   
    this.getLoginDetail();
  }

  getLoginDetail(){
    this.userservice.getLogindata().subscribe(
      ( data : any ) => {
        this.loginuserInfo = {};
        if(data['status'] == 1){
          //console.log(data['data']['business_name']);
          this.loginuserInfo = data['data'];
        } else {
          this.loginuserInfo = data['data']; 
        }
      }
    );  
  }

  logout(){
    this.onboardservice.logout().subscribe(
      ( data : any ) => { 
        console.log(data);
        if(data['status'] == 1){
          localStorage.setItem('isLoggedIn', "false");
          localStorage.removeItem('Authorization');
          localStorage.removeItem('User_info');   
          this.router.navigate(['/login']);
        } else { 
        }
      }
    );    
  }

  


}
