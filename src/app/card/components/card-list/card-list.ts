import { Component } from '@angular/core';
import { Card } from '../../models/Card';
import { Chip } from '../../models/Chip';
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
    new Card('À-propos', 'Flipo Ethan', 'Lorem ipsum dolor sit amet. ' +
      'Et incidunt repellat sit nihil temporibus non repudiandae dicta qui adipisci ipsum. µ' +
      'Eum quas sunt qui eveniet facere aut quasi illo quo sequi tempora eum asperiores molestias. '
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
