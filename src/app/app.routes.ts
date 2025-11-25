import { Routes } from '@angular/router';
import {About} from './about/about';
import {Skills} from './skills/skills';
import {Projects} from './projects/projects';
import {Contact} from './contact/contact';
import {PageNotFound} from './page-not-found/page-not-found';
import {LandingPage} from './landing-page/landing-page';
import {ProjectCard} from './projects/components/project-card/project-card';

export const routes: Routes = [
  { path: '', component: LandingPage },
  { path: 'about', component: About },
  { path: 'skills', component: Skills },
  { path: 'contact', component: Contact },
  { path: 'projects', component: Projects },
  { path: 'projects/:header', component: ProjectCard },
  { path: '404', component: PageNotFound },
  { path: '**', redirectTo: '/404' }
];
