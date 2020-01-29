import { Project } from './project';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

const BASE_URL = 'https://mdv-db.herokuapp.com'

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
model = 'projects4'

  constructor(private httpClient: HttpClient) { }

  getUrl() {
    return `${BASE_URL}/${this.model}`;
  }

  getUrlForId(id) {
    return `${this.getUrl()}/${id}`;
  }

  findProject(projectId: Project) {
    return this.httpClient.get(this.getUrlForId(projectId))
  }

  all() {
    return this.httpClient.get(this.getUrl());
  }

  create(project: Project) {
    return this.httpClient.post(this.getUrl(), project);
  }

  delete(project: Project) {
    return this.httpClient.delete(this.getUrlForId(project.id));
  }

  update(project: Project) {
    return this.httpClient.put(this.getUrlForId(project.id), project);
  }
}
