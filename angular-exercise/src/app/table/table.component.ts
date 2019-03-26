import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  people = [
    {
      fName: 'pam',
      lName: 'pouvy',
      email: 'pPouvy@gmail.com',
      birthday: '7/14/84'
    },{
      fName: 'sterling',
      lName: 'archer',
      email: 'sArcher@gmail.com',
      birthday: '2/13/80'
    },{
      fName: 'cheryl',
      lName: 'tunt',
      email: 'cTunt@gmail.com',
      birthday: '9/9/86'
    }
  ];

  styles: string = "";

  constructor() { }

  ngOnInit() {
  }

  applyStyles(){
    if(this.styles == ""){
      this.styles = "table";
    }
    else{
      this.styles = "";
    }
  }
}
