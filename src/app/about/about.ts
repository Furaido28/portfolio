import { Component, OnInit } from '@angular/core';
import {Card} from '../core/models/Card';
import {Chip} from '../core/models/Chip';
import {NgClass} from '@angular/common';
import {InterestsCard} from './components/interests-card/interests-card';
import {JourneyCard} from './components/journey-card/journey-card';
import {AboutCard} from './components/about-card/about-card';

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

  ngOnInit(): void {
    this.initializeCards();
  }

  private initializeCards(): void {
    // Carte À propos
    this.aboutCard = new Card(
      'about',
      'À propos de moi',
      `Je m'appelle Ethan, je suis passionné d'informatique et plus précisement de developpement.`,
      [
        new Chip('Développement Full-Stack', 'skill'),
        new Chip('UX/UI Design', 'skill'),
        new Chip('Architecture Logicielle', 'skill')
      ],
      [],
      'about',
      {
        profileImage: 'assets/images/photo.png'
      }
    );

    // Carte Parcours
    this.journeyCard = new Card(
      'journey',
      'Mon parcours',
      '',
      [],
      [],
      'about',
      {
        journeySteps: [
          {
            id: 1,
            title: 'Formation en développement',
            description: 'Acquisition des bases en programmation et algorithmie'
          },
          {
            id: 2,
            title: 'Premiers projets personnels',
            description: 'Développement d\'applications web et mobiles pour explorer différentes technologies'
          },
          {
            id: 3,
            title: 'Spécialisation Full-Stack',
            description: 'Maîtrise des technologies front-end et back-end pour créer des applications complètes'
          },
          {
            id: 4,
            title: 'Projets collaboratifs',
            description: 'Travail en équipe sur des projets complexes avec des méthodologies agiles'
          }
        ]
      }
    );

    // Carte Centres d'intérêt
    this.interestsCard = new Card(
      'interests',
      'Mes centres d\'intérêt',
      '',
      [],
      [],
      'about',
      {
        interests: [
          {
            id: 1,
            title: 'Nouvelles technologies',
            description: 'Veille constante sur les dernières innovations dans le domaine du développement',
            icon: '/assets/icons/code.svg',
            color: 'blue'
          },
          {
            id: 2,
            title: 'Design UX/UI',
            description: 'Création d\'interfaces intuitives et d\'expériences utilisateur optimisées',
            icon: '/assets/icons/design.svg',
            color: 'green'
          },
          {
            id: 3,
            title: 'Open Source',
            description: 'Contribution à des projets communautaires et partage de connaissances',
            icon: '/assets/icons/opensource.svg',
            color: 'purple'
          },
          {
            id: 4,
            title: 'Photographie',
            description: 'Capture de moments uniques et exploration de la composition visuelle',
            icon: '/assets/icons/camera.svg',
            color: 'yellow'
          }
        ]
      }
    );
  }
}
