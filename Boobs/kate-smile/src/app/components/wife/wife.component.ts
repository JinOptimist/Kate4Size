import { Component, Input, OnInit } from '@angular/core';
import { IWife as IWife } from 'src/app/models/IWife';

@Component({
  selector: 'wife',
  templateUrl: './wife.component.html',
  styleUrls: ['./wife.component.scss']
})

export class WifeComponent implements OnInit {
  title!: string;

  @Input() element!: IWife;

  constructor() { }

  ngOnInit(): void {
    this.title = 'рад на неё смотреть';
  }

}
