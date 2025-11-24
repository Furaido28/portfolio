import { Component, Input } from '@angular/core';
import {Card} from '../../../core/models/Card';

@Component({
  selector: 'app-about-card',
  templateUrl: './about-card.html',
  styleUrls: ['./about-card.scss']
})
export class AboutCard {
  @Input() card!: Card;

  openCard(card: Card): void {
    // Logique pour ouvrir la carte détaillée
    console.log('Opening about card:', card);
    // Vous pouvez émettre un événement ou utiliser un service de navigation
  }
}
