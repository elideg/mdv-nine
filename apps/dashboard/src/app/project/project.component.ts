import { Component, OnInit } from '@angular/core';
import { Project, ProjectService } from '@mdv-nine/core-data';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotifyService } from 'libs/core-data/src/lib/notify.service';

@Component({
  selector: 'mdv-three-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  form: FormGroup;
  selectedProject: Project;
  projects$;

  constructor(
    private projectService: ProjectService,
    private fb: FormBuilder,
    private notify: NotifyService
    ) { }

  ngOnInit() {
    this.initForm();
    this.resetProject();
    this.getProjects();
  }

  selectProject(project: Project) {
    this.form.patchValue(project)
    this.selectedProject = project;
  }

  getProjects() {
    this.projects$ = this.projectService.all();
  }

  resetProject() {
    const emptyProject: Project = {
      id: null,
      title: '',
      details: '',
      percentComplete: 0,
      approved: false
    }
    this.selectProject(emptyProject);
  }

  createProject(project: Project) {
    this.projectService.create(project).subscribe((r) => {
      this.notify.notification('Successfully Created a Project')
      this.resetProject();
      this.getProjects();
    })
  }

  cancel() {
    this.resetProject();
    this.form.reset();
  }

  saveProject(project: Project) {
    if (project.id) {
      this.updateProject(project);
    } else {
      this.createProject(project);
    }
  }

  updateProject(project: Project) {
    this.projectService.update(project).subscribe((r) => {
      this.notify.notification('Successfully Updated a Project')
      this.resetProject();
      this.getProjects();
    });
  }

  deleteProject(project: Project) {
    this.projectService.delete(project).subscribe((r) => {
      this.notify.notification('Successfully Deleted a Project')
      this.resetProject();
      this.getProjects();
    })
  }

  initForm() {
    this.form = this.fb.group({
      id: [''],
      title: ['', Validators.compose([Validators.required])],
      details: ['', Validators.compose([Validators.required])],
      percentComplete: [0, Validators.compose([Validators.required])],
      approved: [false]
    })
  }

}
