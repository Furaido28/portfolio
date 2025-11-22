import { Component, Input } from '@angular/core';
import { Card } from '../../../core/components/models/Card';
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
    if(card.header.toLowerCase() === 'à-propos')
      this.router.navigateByUrl(`about`);

    if(card.header.toLowerCase() === 'compétences')
      this.router.navigateByUrl(`skills`);

    if(card.header.toLowerCase() === 'project')
      this.router.navigateByUrl(`projects`);

    if(card.header.toLowerCase() === 'contact')
      this.router.navigateByUrl(`contact`);
  }
}
