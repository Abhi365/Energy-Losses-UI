import { Component,OnInit } from '@angular/core';
declare var $: any;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    constructor() {

    }

    ngOnInit() {
        $('#adminElem').hover(
      () => {
        $('.nav-vertical-submenu').addClass('active');
      },
      () => {
        $('.nav-vertical-submenu').removeClass('active');
      }
    );
    $('#activeAdmin').hover(
      () => {
        $('.nav-vertical-submenu').addClass('active');
      },
      () => {
        $('.nav-vertical-submenu').removeClass('active');
      }
    );
    } 
}