import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'for-adults-box',
  templateUrl: './for-adults-box.component.html',
  styleUrls: ['./for-adults-box.component.scss']
})
export class ForAdultsBoxComponent implements OnInit {
  @Input() forAdults: any;

  constructor() { }

  ngOnInit(): void {
  }

}
