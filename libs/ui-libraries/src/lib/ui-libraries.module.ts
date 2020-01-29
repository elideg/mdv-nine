import { AppRoutingModule } from './../../../../apps/dashboard/src/app/app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@mdv-nine/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { LoginComponent } from './login/login.component';
import { WildcardComponent } from './wildcard/wildcard.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  declarations: [ToolbarComponent, LoginComponent, WildcardComponent, SignupComponent],
  exports: [ToolbarComponent, LoginComponent, WildcardComponent, SignupComponent]
})
export class UiLibrariesModule {}
