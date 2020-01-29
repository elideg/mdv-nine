import { Project } from '@mdv-nine/core-data';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mdv-nine-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {


  @Input() projects: Project[];
  @Output() deleted = new EventEmitter;
  @Output() selected = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

}
