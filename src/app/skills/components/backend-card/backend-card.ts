import {Component, Input} from '@angular/core';
import {Card} from '../../../core/models/Card';

@Component({
  selector: 'app-backend-card',
  imports: [],
  templateUrl: './backend-card.html',
  styleUrl: './backend-card.scss',
})
export class BackendCard {
  @Input() card!: Card;
}
