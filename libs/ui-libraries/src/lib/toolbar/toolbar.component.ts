import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mdv-nine-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Input() sidenav

  constructor() { }

  ngOnInit() {
  }

}
