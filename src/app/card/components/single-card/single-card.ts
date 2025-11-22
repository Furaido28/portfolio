import { Component, Input } from '@angular/core';
import { Card } from '../../models/Card';

@Component({
  selector: 'app-single-card',
  templateUrl: './single-card.html',
  styleUrls: ['./single-card.scss']
})
export class SingleCard {
  @Input() card!: Card;
}
