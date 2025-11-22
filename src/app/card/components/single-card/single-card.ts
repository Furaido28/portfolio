import { Component, Input } from '@angular/core';
import { Card } from '../../../core/components/models/Card';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-single-card',
  templateUrl: './single-card.html',
  imports: [
    NgClass
  ],
  styleUrls: ['./single-card.scss']
})
export class SingleCard {
  @Input() card!: Card;
}
