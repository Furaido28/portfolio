// projects.ts
import { Component, OnInit } from '@angular/core';
import { Card } from '../core/models/Card';
import { NgClass } from '@angular/common';
import { ProjectCardsServices } from './services/projectCardsServices'; // Assurez-vous que le chemin est correct
import { Router } from '@angular/router';
import { ProjectCard } from './components/project-card/project-card';
import {SectionNavigation} from '../core/components/section-navigation/section-navigation';

@Component({
  selector: 'app-projects-page',
  standalone: true,
  templateUrl: './projects.html',
  styles: './projects.scss',
  imports: [
    NgClass,
    ProjectCard,
    SectionNavigation
  ],
  styleUrls: ['./projects.scss']
})
export class Projects implements OnInit {
  projects: Card[] = [];

  constructor(private projectCardsService: ProjectCardsServices,
              private router: Router) { }

  ngOnInit(): void {
    this.projects = this.projectCardsService.getAllProjects();
  }

  protected goToNextSection() {
    this.router.navigateByUrl('contact');
  }

  protected goToPreviousSection() {
    this.router.navigateByUrl('skills');
  }
}
