import { Component, signal } from '@angular/core';
import {CardList} from './card/components/card-list/card-list';
import {Header} from './core/components/header/header';

@Component({
  selector: 'app-root',
  imports: [
    CardList,
    Header
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('portfolio');
}
