import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Card} from '../../../core/models/Card';

@Component({
  selector: 'app-bento-grid',
  templateUrl: './bento-grid.html'
})
export class BentoGridComponent {
  @Input() cards: Card[] = [];
  @Output() onAction = new EventEmitter<Card>();

  handleAction(card: Card) {
    this.onAction.emit(card);
  }
}
