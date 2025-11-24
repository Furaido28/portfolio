import {Injectable} from '@angular/core';
import {Card} from '../models/Card';
import {Chip} from '../models/Chip';

@Injectable({
  providedIn: 'root'
})
export class CardsServices {
  private _cards: Card[] = [
    new Card('about', 'Flipo Ethan', `Passionné par le développement d'applications, je donne vie à mes ambitions à travers le code.`, [
        new Chip('En savoir plus sur moi')
      ]
    ),

    new Card('skills', 'Compétences Techniques', '', [
        new Chip('Back-End'),
        new Chip('Front-End'),
        new Chip('Full-Stack')
      ]
    ),

    new Card('project', 'Project principaux', '', [
        new Chip('Voir mes project'),
      ]
    ),

    new Card('contact', 'Informations complémentaires', '', [
        new Chip('Email'),
        new Chip('LinkedIn'),
        new Chip('GitHub')
      ]
    )
  ];

  getAllCards(): Card[] {
    return [...this._cards];
  }

  getCardByHeader(value: string): Card {
    const returnedCard = this._cards.find(card => card.header === value);

    if (returnedCard) {
      return returnedCard;
    }

    return Card.empty();
  }
}
