import { Component, OnInit, ViewChild,ChangeDetectorRef, NgZone, ApplicationRef, ChangeDetectionStrategy } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { SidebarComponent } from '../../template/sidebar/sidebar.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers:[SidebarComponent]
})

export class ProfileComponent implements OnInit { 
  public loginuserInfo : any = {};
  public message : string = "";
  //@ViewChild(SidebarComponent, {static: false}) sidebar: SidebarComponent;

  constructor(private userservice: UsersService, public sidebar : SidebarComponent) { }

  ngOnInit(){
    this.userservice.getLogindata().subscribe(
      ( data : any ) => {
        console.log(data);
        if(data['status'] == 1){ 
          this.loginuserInfo = data['data'];
        } else {
           
        }
      }
    ); 
  }

  onSubmit(){
    // console.log(profileData);
    let formdata: any = new FormData();
    formdata.append('firstname', this.loginuserInfo.firstname.trim());
    formdata.append('lastname', this.loginuserInfo.lastname.trim());
    formdata.append('user_phone', this.loginuserInfo.user_phone.trim());
    formdata.append('user_pic', this.selectedFile);
    
    this.userservice.updateUser(formdata).subscribe(
      ( data : any ) => {
        console.log(data);
        if(data['status'] == 0){
          this.message = data['message'];
        } else {
          setTimeout(() => {
            console.log('Done');
            this.sidebar.getLoginDetail();
            // this.userservice.resetCurrentRouter();
            this.message = data['message']; 
          }, 3000);
          
        }
      }
    ); 
  }

  selectedFile : string = "";
  onFileChanged(event) {
    this.selectedFile = event.target.files[0]
  }



}
