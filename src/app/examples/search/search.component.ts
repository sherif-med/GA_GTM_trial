import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  state_default = false;
  doubleSlider = [200, 800];
  simpleSlider = 25;

  constructor() { }

  ngOnInit() {
  }

}
