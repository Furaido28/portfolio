import {Injectable} from '@angular/core';
import {Card} from '../../core/models/Card';
import {Chip} from '../../core/models/Chip';

@Injectable({
  providedIn: 'root'
})
export class AboutCardsService {
  // Carte À propos
  private _aboutCard: Card = new Card(
    'about',
    'À propos de moi',
    "Je m'appelle Ethan, développeur Full-Stack junior passionné par les nouvelles technologies. Je crée des applications " +
    "performantes en alliant curiosité technique et rigueur de développement.",
    [
      new Chip('Développement Full-Stack', 'skill'),
      new Chip("Junior", "action")
    ],
    'about',
    {
      profileImage: 'assets/images/photo.png'
    }
  );

  // Carte Parcours
  private _journeyCard: Card = new Card(
    'journey',
    'Mon parcours',
    '',
    [],
    'about',
    {
      journeySteps: [
        {
          id: 1,
          title: "Bachelier en développement d'applications",
          description: 'Haute École Louvain en Hainaut, Mons',
          period: '2022 - maintenant',
          details: 'Spécialisation en développement Full-Stack'
        },
        {
          id: 2,
          title: "CESS en économie général",
          description: 'Ursulines la Madeleine, Tournai',
          period: "2016 - 2022",
          details: "Option économique et art du théatre"
        }
      ]
    }
  );

  // Carte Centres d'intérêt
  private _interestsCard: Card = new Card(
    'interests',
    'Mes centres d\'intérêt',
    '',
    [],
    'about',
    {
      interests: [
        {
          id: 1,
          title: 'Technologies et programmation',
          description: 'Exploration de nouveaux langages et frameworks, développement de projets personnels',
          icon: 'assets/icons/laptop.svg',
          color: 'blue'
        },
        {
          id: 2,
          title: 'Apprentissage continu',
          description: 'Suivi des tendances tech et approfondissement des compétences',
          icon: 'assets/icons/book.svg',
          color: 'green'
        },
        {
          id: 3,
          title: 'Voyages et échanges culturels',
          description: 'Découverte de nouvelles cultures, rencontres et échange internationales',
          icon: 'assets/icons/plane.svg',
          color: 'purple'
        },
        {
          id: 4,
          title: 'Théâtre et arts de la scène',
          description: 'Pratique du théâtre, développement de l\'expression orale et travail en troupe',
          icon: 'assets/icons/mask.svg',
          color: 'red'
        }
      ]
    }
  );


  getAboutCard(): Card {
    return this._aboutCard;
  }

  getJourneyCard(): Card {
    return this._journeyCard;
  }

  getInterestsCard(): Card {
    return this._interestsCard;
  }
}
