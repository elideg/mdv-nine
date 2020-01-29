import { AuthTokenIntercepterService } from './../../../../libs/core-data/src/lib/auth/auth-token-intercepter.service';
import { UiLibrariesModule } from './../../../../libs/ui-libraries/src/lib/ui-libraries.module';
import { CoreDataModule } from '@mdv-nine/core-data';
import { MaterialModule } from '@mdv-nine/material';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProjectComponent } from './project/project.component';
import { ProjectListComponent } from './project/project-list/project-list.component';
import { ProjectDetailsComponent } from './project/project-details/project-details.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ProjectItemComponent } from './project/project-item/project-item.component';

@NgModule({
  declarations: [AppComponent, ProjectComponent, ProjectListComponent, ProjectDetailsComponent, ProjectItemComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    CoreDataModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    UiLibrariesModule,
    AppRoutingModule
  ],
  providers: [
    {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthTokenIntercepterService,
    multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
