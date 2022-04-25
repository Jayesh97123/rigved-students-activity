import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddContactComponent } from './add-contact/add-contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { SearchContactComponent } from './search-contact/search-contact.component';
import { SettingComponent } from './setting/setting.component';
import { ShowContactsComponent } from './show-contacts/show-contacts.component';
import { UpdateContactPhoneComponent } from './update-contact-phone/update-contact-phone.component';
import { UpdateProfileDobComponent } from './update-profile-dob/update-profile-dob.component';
import { UpdateProfilePassComponent } from './update-profile-pass/update-profile-pass.component';
import { UpdateProfilePhoneComponent } from './update-profile-phone/update-profile-phone.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';

const routes: Routes = [
  {path : "", component: LoginComponent},
  {path: "login", component: LoginComponent},
  {path: "register", component: RegisterComponent},
  {path: "success/:id", component: ProfileComponent, children: [
    {path: "", component: DashboardComponent},
    {path: "dashboard", component: DashboardComponent},
    {path: "showContacts", component: ShowContactsComponent},
    {path: "addContact", component: AddContactComponent},
    {path:"updateContactPhone",component:UpdateContactPhoneComponent},
    {path:"searchcontact",component:SearchContactComponent},
    {path:"settings",component:SettingComponent},
    {path:"updateProfile",component:UpdateProfileComponent,children:[
      {path:"",component:UpdateProfilePhoneComponent},
      {path:"updatedob",component:UpdateProfileDobComponent},
      {path:"updatepass",component:UpdateProfilePassComponent},
      {path:"updatephone",component:UpdateProfilePhoneComponent}
    ]}
  ]}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
