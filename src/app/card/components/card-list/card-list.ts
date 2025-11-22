import { Component } from '@angular/core';
import { Card } from '../../../core/components/models/Card';
import { Chip } from '../../../core/components/models/Chip';
import { SingleCard } from '../single-card/single-card';
@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.html',
  styleUrls: ['./card-list.scss'],
  imports: [
    SingleCard
  ]
})
export class CardList {
  cards: Card[] = [
    new Card('À-propos', 'Flipo Ethan', `Passionné par le développement d'applications, je donne vie à mes ambitions à travers le code.`, [
        new Chip('En savoir plus sur moi')
      ]
    ),

    new Card('Compétences', 'Compétences Techniques', '', [
        new Chip('Back-End'),
        new Chip('Front-End'),
        new Chip('Full-Stack')
      ]
    ),

    new Card('Projets', 'Projets principaux', '', [
        new Chip('Voir mes projets'),
      ]
    ),

    new Card('Contact', 'Informations complémentaires', '', [
        new Chip('Email'),
        new Chip('LinkedIn'),
        new Chip('GitHub')
      ]
    )
  ];
}
