import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ParentActivityComponent } from './parent-activity/parent-activity.component';
import { ChildActivityComponent } from './child-activity/child-activity.component';
import { TdfDemoComponent } from './tdf-demo/tdf-demo.component';
import { FormsModule } from '@angular/forms';
import { TdfValidationDemoComponent } from './tdf-validation-demo/tdf-validation-demo.component';
import { TdfValidation2Component } from './tdf-validation2/tdf-validation2.component';
import { RegistrationFormActivityComponent } from './registration-form-activity/registration-form-activity.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MdfDemoComponent } from './mdf-demo/mdf-demo.component';
import { MdfDemoActivityComponent } from './mdf-demo-activity/mdf-demo-activity.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    ParentActivityComponent,
    ChildActivityComponent,
    TdfDemoComponent,
    TdfValidationDemoComponent,
    TdfValidation2Component,
    RegistrationFormActivityComponent,
    MdfDemoComponent,
    MdfDemoActivityComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
