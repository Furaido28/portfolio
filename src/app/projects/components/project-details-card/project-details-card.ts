import { Component, Input } from '@angular/core';
import { Card } from '../../../core/models/Card';
import {NgClass} from '@angular/common'; // Ajustez le chemin

@Component({
  selector: 'app-project-details-card',
  templateUrl: './project-details-card.html',
  imports: [
    NgClass
  ],
  styleUrls: ['./project-details-card.scss']
})
export class ProjectDetailsCard {
  @Input() card!: Card;

  formatDescription(text: string): string[] {
    return text.split('\n').filter(line => line.trim() !== '');
  }
}
