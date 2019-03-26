import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  selection: string[] = [];

  animals: string[] = ['lion', 'tiger', 'bear'];
  colors: string[] = ['red', 'green', 'blue'];
  days: string[] = ['sunday', 'monday', 'tuesday'];

  constructor() { }

  ngOnInit() {
  }

  dispSel(event){
    this.selection = [];
    let selected = event.target.value;

    switch(selected){
      case 'animals':
        this.selection = this.animals;
      break;
      case 'colors':
        this.selection = this.colors;
      break;
      case 'days':
        this.selection = this.days;
      break;
    }
  }
}
