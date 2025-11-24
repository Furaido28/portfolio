import { Component, Input } from '@angular/core';
import { Card } from '../../../core/models/Card';
import {NgClass} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-single-card',
  standalone: true,
  templateUrl: './single-card.html',
  imports: [
    NgClass
  ],
  styleUrls: ['./single-card.scss']
})
export class SingleCard {
  @Input() card!: Card;

  constructor(private router: Router) {
  }

  protected openCard(card: Card) {
    if(card.header !== "contact")
      this.router.navigateByUrl(card.header);
  }
}
