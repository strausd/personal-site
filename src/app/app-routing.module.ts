import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {ResumeComponent} from './resume/resume.component';
import {ContactComponent} from './contact/contact.component';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'about', component: AboutComponent},
  {path: 'resume', component: ResumeComponent},
  {path: 'contact', component: ContactComponent},
  {path: '**', redirectTo: ''}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
