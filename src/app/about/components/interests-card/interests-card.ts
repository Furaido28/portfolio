import {Component, Input} from '@angular/core';
import {Card} from '../../../core/models/Card';

@Component({
  selector: 'app-interests-card',
  templateUrl: './interests-card.html',
  styleUrls: ['./interests-card.scss']
})
export class InterestsCard {
  @Input() card!: Card;
}
