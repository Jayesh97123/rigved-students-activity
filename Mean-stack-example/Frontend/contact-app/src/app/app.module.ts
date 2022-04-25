import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchContactComponent } from './search-contact/search-contact.component';
import { SettingComponent } from './setting/setting.component';
import { ShowContactsComponent } from './show-contacts/show-contacts.component';
import { UpdateContactPhoneComponent } from './update-contact-phone/update-contact-phone.component';
import { UpdateDashboardComponent } from './update-dashboard/update-dashboard.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { UpdateProfileDobComponent } from './update-profile-dob/update-profile-dob.component';
import { UpdateProfilePassComponent } from './update-profile-pass/update-profile-pass.component';
import { UpdateProfilePhoneComponent } from './update-profile-phone/update-profile-phone.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http' 
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field'
import { MatNativeDateModule } from '@angular/material/core';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  declarations: [
    AppComponent,
    AddContactComponent,
    DashboardComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    SearchContactComponent,
    SettingComponent,
    ShowContactsComponent,
    UpdateContactPhoneComponent,
    UpdateDashboardComponent,
    UpdateProfileComponent,
    UpdateProfileDobComponent,
    UpdateProfilePassComponent,
    UpdateProfilePhoneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    MatTabsModule,
    MatIconModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
