import {Component, Input, OnInit} from '@angular/core';
import {Card} from '../../../core/models/Card';
import {AboutCardsService} from '../../services/aboutCardsServices';

@Component({
  selector: 'app-journey-card',
  standalone: true,
  templateUrl: './journey-card.html',
  styleUrls: ['./journey-card.scss']
})
export class JourneyCard {
  @Input() card!: Card;
}
