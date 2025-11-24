import {Component, Input} from '@angular/core';
import {Card} from '../../../core/models/Card';

@Component({
  selector: 'app-fullstack-card',
  imports: [],
  templateUrl: './fullstack-card.html',
  styleUrl: './fullstack-card.scss',
})
export class FullstackCard {
  @Input() card!: Card;
}
