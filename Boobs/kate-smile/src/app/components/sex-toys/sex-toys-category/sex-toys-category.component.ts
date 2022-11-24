import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sex-toys-category',
  templateUrl: './sex-toys-category.component.html',
  styleUrls: ['./sex-toys-category.component.scss']
})
export class SexToysCategoryComponent implements OnInit {
  
  @Input() sexToys: any;
  constructor() { }

  ngOnInit(): void {
  }

}
