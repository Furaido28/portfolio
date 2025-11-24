import { Component } from '@angular/core';
import {CardList} from './components/card-list/card-list';

@Component({
  selector: 'app-landing-page',
  imports: [
    CardList
  ],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.scss',
})
export class LandingPage {

}
