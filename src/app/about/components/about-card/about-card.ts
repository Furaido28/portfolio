import {Component, Input} from '@angular/core';
import {Card} from '../../../core/models/Card';

@Component({
  selector: 'app-about-card',
  standalone: true,
  templateUrl: './about-card.html',
  styleUrls: ['./about-card.scss']
})
export class AboutCard{
  @Input() card!: Card;
}
