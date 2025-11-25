import {Component, OnInit} from '@angular/core';
import {Card} from '../core/models/Card';
import {Chip} from '../core/models/Chip';
import {SkillsCardsService} from './services/skillsCardsServices';
import {Router} from '@angular/router';
import {BackendCard} from './components/backend-card/backend-card';
import {NgClass} from '@angular/common';
import {FrontendCard} from './components/frontend-card/frontend-card';
import {FullstackCard} from './components/fullstack-card/fullstack-card';
import {SectionNavigation} from '../core/components/section-navigation/section-navigation';

@Component({
  selector: 'app-skills',
  imports: [
    BackendCard,
    NgClass,
    FrontendCard,
    FullstackCard,
    SectionNavigation
  ],
  templateUrl: './skills.html'
})
export class Skills implements OnInit {
  backendCard!: Card;
  frontendCard!: Card;
  fullstackCard!: Card;

  constructor(private skillsCardsService: SkillsCardsService,
              private router: Router) {
  }

  ngOnInit() {
    this.backendCard = this.skillsCardsService.getBackendCard();
    this.frontendCard = this.skillsCardsService.getFrontendCard();
    this.fullstackCard = this.skillsCardsService.getFullstackCard();
  }

  goToPreviousSection() {
    this.router.navigateByUrl('about')
  }

  goToNextSection() {
    this.router.navigateByUrl('projects')
  }
}
