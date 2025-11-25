import {Component, Input} from '@angular/core';
import { Card } from '../../../core/models/Card';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-project-details-card',
  standalone: true,
  templateUrl: './project-details-card.html',
  imports: [
    NgClass
  ],
  // Laissez uniquement les imports pour le rendu (NgClass)
  // ...
})
export class ProjectDetailsCard {
  @Input() card!: Card; // L'Input est le seul moyen d'obtenir les données

  // Gardez la méthode de formatage pour le rendu
  formatDescription(text: string): string[] {
    return text.split('\n').filter(line => line.trim() !== '');
  }
}
