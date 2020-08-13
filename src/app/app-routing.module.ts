import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { UserDescComponent } from './user-desc/user-desc.component';
import { MailComponent } from './mail/mail.component';

import { AddContactComponent } from './add-contact/add-contact.component';

const routes: Routes = [
  
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'home', component: HomeComponent},
  {path: 'user-desc/:id', component: UserDescComponent},
  {path: 'mail/:id', component: MailComponent},
  {path: 'add-contact', component: AddContactComponent},
  {path: '**' ,redirectTo: 'register', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }