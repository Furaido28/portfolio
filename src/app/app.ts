import { Component, signal } from '@angular/core';
import {CardList} from './card/components/card-list/card-list';
import {Header} from './core/components/header/header';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CardList,
    Header,
    RouterOutlet
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('portfolio');
}
