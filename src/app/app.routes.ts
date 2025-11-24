import { Routes } from '@angular/router';
import {About} from './about/about';
import {Skills} from './skills/skills';
import {Project} from './project/project';
import {Contact} from './contact/contact';
import {PageNotFound} from './page-not-found/page-not-found';
import {LandingPage} from './landing-page/landing-page';

export const routes: Routes = [
  { path: '', component: LandingPage },
  { path: 'about', component: About },
  { path: 'skills', component: Skills },
  { path: 'projects', component: Project },
  { path: 'contact', component: Contact },
  { path: '404', component: PageNotFound },
  { path: '**', redirectTo: '/404' }
];
