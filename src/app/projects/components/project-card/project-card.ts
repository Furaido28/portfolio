// components/projects-card/projects-card.component.ts
import { Component, Input } from '@angular/core';
import { Card } from '../../../core/models/Card';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects-card',
  standalone: true,
  templateUrl: './project-card.html',
  styleUrls: ['./project-card.scss']
})
export class ProjectCard {
  @Input() card!: Card;

  constructor(private router: Router) {}

  viewProjectDetails(): void {
    this.router.navigateByUrl(`/projects/${this.card.header}`);
  }
}
