import { Routes } from '@angular/router';
import {App} from './app';
import {CardList} from './card/components/card-list/card-list';
import {urlGuard} from './core/url.guard';
import {About} from './pages/about/about';
import {Skills} from './pages/skills/skills';
import {Project} from './pages/project/project';
import {Contact} from './pages/contact/contact';
import {PageNotFound} from './pages/page-not-found/page-not-found';

export const routes: Routes = [
  { path: '', component: CardList},
  { path: 'about', component: About },
  { path: 'skills', component: Skills },
  { path: 'projects', component: Project },
  { path: 'contact', component: Contact },
  { path: '**', component: PageNotFound }
];
