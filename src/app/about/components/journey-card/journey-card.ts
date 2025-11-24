import { Component, Input } from '@angular/core';
import {Card} from '../../../core/models/Card';

@Component({
  selector: 'app-journey-card',
  templateUrl: './journey-card.html',
  styleUrls: ['./journey-card.scss']
})
export class JourneyCard {
  @Input() card!: Card;

  openCard(card: Card): void {
    console.log('Opening journey card:', card);
  }
}
