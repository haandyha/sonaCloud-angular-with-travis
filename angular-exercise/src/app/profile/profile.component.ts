import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user = {
    name: 'Bill',
    email: 'Bbob@gmail.com'
  }

  btnVal: string = 'show';
  disp: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  toggleDisp(){
    if(this.btnVal == 'show'){
      this.disp = false;
      this.btnVal = 'hide';
    }
    else{
      this.disp = true;
      this.btnVal = 'show';
    }
  }

}
