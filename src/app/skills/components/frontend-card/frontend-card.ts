import {Component, Input} from '@angular/core';
import {Card} from '../../../core/models/Card';

@Component({
  selector: 'app-frontend-card',
  imports: [],
  templateUrl: './frontend-card.html',
  styleUrl: './frontend-card.scss',
})
export class FrontendCard {
  @Input() card!: Card;
}
