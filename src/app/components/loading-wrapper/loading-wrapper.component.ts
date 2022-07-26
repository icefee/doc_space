import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading-wrapper',
  templateUrl: './loading-wrapper.component.html',
  styleUrls: ['./loading-wrapper.component.css']
})
export class LoadingWrapperComponent implements OnInit {
  
  @Input() loading!: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
