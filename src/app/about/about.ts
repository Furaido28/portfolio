import { Component, OnInit } from '@angular/core';
import {Card} from '../core/models/Card';
import {Chip} from '../core/models/Chip';
import {NgClass} from '@angular/common';
import {InterestsCard} from './components/interests-card/interests-card';
import {JourneyCard} from './components/journey-card/journey-card';
import {AboutCard} from './components/about-card/about-card';
import {AboutCardsService} from './services/aboutCardsServices';
import {Router} from '@angular/router';

@Component({
  selector: 'app-about-page',
  templateUrl: './about.html',
  imports: [
    NgClass,
    InterestsCard,
    JourneyCard,
    AboutCard
  ],
  styleUrls: ['./about.scss']
})
export class About implements OnInit {
  aboutCard!: Card;
  journeyCard!: Card;
  interestsCard!: Card;

  constructor(private aboutCardsService: AboutCardsService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.aboutCard = this.aboutCardsService.getAboutCard();
    this.journeyCard = this.aboutCardsService.getJourneyCard();
    this.interestsCard = this.aboutCardsService.getInterestsCard();
  }

  protected goToHome() {
    this.router.navigateByUrl('');
  }

  protected goToSkills() {
    this.router.navigateByUrl('skills');
  }
}
