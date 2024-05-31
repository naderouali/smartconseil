import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  // styleUrls: ['./home.component.css']
  styleUrls: [
              // './home.component.css',
              '../../../assets/css/plugins.css', 
              '../../../assets/css/style.css', 
              '../../../assets/css/colors/purple.css', 
            ],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
