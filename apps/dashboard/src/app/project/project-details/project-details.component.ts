import { Project } from '@mdv-nine/core-data';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'mdv-nine-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {
  currentProject: Project;
  originalTitle;

  @Input() form: FormGroup;
  @Output() saved = new EventEmitter;
  @Output() cancelled = new EventEmitter;
  @Input() set project(value) {
    this.originalTitle = value.title;
      this.currentProject = Object.assign({}, value)
  }

  constructor() { }

  ngOnInit() {
  }

  saveForm(formDirective: NgForm) {
    this.saved.emit(formDirective.value)
    formDirective.resetForm();
  }

}
