import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'one-block',
  templateUrl: './one-block.component.html',
  styleUrls: ['./one-block.component.scss']
})
export class OneBlockComponent implements OnInit {

  @Input() imageObject: any;

  constructor() { }

  ngOnInit(): void {
  }

}
