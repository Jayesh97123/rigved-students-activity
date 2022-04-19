import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticateGuard } from './authenticate.guard';
import { CreateComponent } from './create/create.component';
import { DeleteComponent } from './delete/delete.component';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SuccessComponent } from './success/success.component';
import { UpdateComponent } from './update/update.component';
import { UpdateeditComponent } from './updateedit/updateedit.component';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"success/:name/:pass",component:SuccessComponent,canActivate:[AuthenticateGuard],children:[
    {path:"",component:ListComponent},
    {path:"list",component:ListComponent},
    {path:"delete",component:DeleteComponent},
    {path:"update",component:UpdateComponent},
    {path:"updateEdit",component:UpdateeditComponent},
    {path:"create",component:CreateComponent}
    
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
