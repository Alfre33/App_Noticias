import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-jagf',
  templateUrl: './navbar-jagf.component.html',
  styleUrls: ['./navbar-jagf.component.css']
})
export class NavbarJagfComponent implements OnInit {
  @Input() titulo :string; 
  constructor() { 
    this.titulo='';
  }

  ngOnInit(): void {
  }

}
