import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { WebSkillsComponent } from './web-skills/web-skills.component';
import { ExperienceComponent } from './experience/experience.component';
import { WorksComponent } from './works/works.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [{
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
}, {
  path: 'home',
  component: HomeComponent
}, {
  path: 'aboutMe',
  component: AboutMeComponent
}, {
  path: 'webSkills',
  component: WebSkillsComponent
}, {
  path: 'experience',
  component: ExperienceComponent
}, {
  path: 'works',
  component: WorksComponent
}, {
  path: 'contact',
  component: ContactComponent
}, {
  path: '**',
  redirectTo: 'home',
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
