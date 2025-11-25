import {Injectable} from '@angular/core';
import {Card} from '../../core/models/Card';
import {Chip} from '../../core/models/Chip';

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

    new Card('projects', 'Projects principaux', '', [
        new Chip('Voir mes projects'),
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
    return this._cards.map(card => card.clone());
  }
}
