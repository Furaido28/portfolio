// project-details-page.ts
import {Component, Input, OnInit} from '@angular/core';
import { Card } from '../../../core/models/Card';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectCardsServices } from '../../services/projectCardsServices';
import { ProjectDetailsCard } from '../project-details-card/project-details-card';

@Component({
  selector: 'app-project-details-page',
  standalone: true,
  templateUrl: './project-details-page.html',
  imports: [
    ProjectDetailsCard
  ],
  styleUrls: ['./project-details-page.scss']
})
export class ProjectDetailsPage implements OnInit {
  @Input() card: Card = Card.empty();
  isLoading: boolean = true;

  constructor(
    private projectCardsServices: ProjectCardsServices,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const projectHeader = params['header'];

      if (projectHeader) {
        this.loadProjectDetails(projectHeader);
      }
    });
  }

  loadProjectDetails(header: string): void {
    const card = this.projectCardsServices.getProjectByHeader(header);


    if (card) {
      this.card = card;
      this.isLoading = false;
    } else {
      this.isLoading = true;
    }
  }

  goToProjects() {
    this.router.navigateByUrl('projects');
  }
}
