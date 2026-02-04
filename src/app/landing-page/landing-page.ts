import { Component } from '@angular/core';
import {Card} from '../core/models/Card';
import {CardsServices} from './services/cards-services';
import {BentoGridComponent} from './components/single-card/bento-grid';
import {Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-landing-page',
  imports: [
    BentoGridComponent
  ],
  templateUrl: './landing-page.html'
})
export class LandingPage {
  // On déclare les 3 groupes
  cards: Card[] = [];

  constructor(private cardsService: CardsServices, private router: Router) {
    const all = this.cardsService.getAllCards();
    this.cards = all.slice(0, 4);
  }

  protected navigateTo(card: Card) {

    if (card.header === 'about') {
      this.router.navigateByUrl('about');
    }

    if (card.header === 'projects') {
      this.router.navigateByUrl('projects');
    }

    if (card.header === 'skills') {
      this.router.navigateByUrl('skills');
    }

    if (card.header === 'contact') {
      this.router.navigateByUrl('contact');
    }
  }
}
