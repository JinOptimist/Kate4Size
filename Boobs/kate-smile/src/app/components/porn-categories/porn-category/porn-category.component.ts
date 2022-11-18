import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'porn-category',
  templateUrl: './porn-category.component.html',
  styleUrls: ['./porn-category.component.scss']
})
export class PornCategoryComponent implements OnInit {

  @Input() pornCategory: any;

  constructor() { }

  ngOnInit(): void {
  }

}
