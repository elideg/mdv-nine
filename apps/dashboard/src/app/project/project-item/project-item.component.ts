import { NotifyService } from './../../../../../../libs/core-data/src/lib/notify.service';
import { ProjectService, Project } from '@mdv-nine/core-data';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs/operators'
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'mdv-nine-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss']
})
export class ProjectItemComponent implements OnInit {
  currentProject;
  originalTitle;

  public get _currentProject() {
    return this.currentProject
  }

  public set _currentProject(value) {
    this.currentProject = value;
  }

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    private projectService: ProjectService,
    private notify: NotifyService
  ) { }

  ngOnInit() {
    const projectId = this.route.snapshot.params && this.route.snapshot.params.id;
    this.currentProject = this.projectService.findProject(projectId);
    this.currentProject.pipe(
      tap((project: Project) => this.originalTitle = project.title)
      ).subscribe(
        this.notify.notification('Successfully Loaded a Project')
    )
  }

}
