import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import {HomeComponent} from './home/home.component';
// import {AboutComponent} from './about/about.component';
// import {ResumeComponent} from './resume/resume.component';
// import {ContactComponent} from './contact/contact.component';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'about', loadChildren: './about/about.module#AboutModule'},
  {path: 'resume', loadChildren: './resume/resume.module#ResumeModule'},
  {path: 'contact', loadChildren: './contact/contact.module#ContactModule'},
  {path: '**', redirectTo: ''}
];
@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
