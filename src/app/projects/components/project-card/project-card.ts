// components/projects-card/projects-card.component.ts
import {Component, Input, OnInit} from '@angular/core';
import { Card } from '../../../core/models/Card';
import { Router } from '@angular/router';
import {ProjectCardsServices} from '../../services/projectCardsServices';

@Component({
  selector: 'app-projects-card',
  standalone: true,
  templateUrl: './project-card.html',
})
export class ProjectCard {
  @Input({ required: true }) card!: Card;

  constructor(private router: Router) {}

  viewProjectDetails(): void {
    // Utilisation d'un identifiant unique propre
    this.router.navigate(['/projects', this.card.header]);
  }
}
