import {Component, OnInit} from '@angular/core';
import { Card } from '../../../core/models/Card';
import { Chip } from '../../../core/models/Chip';
import { SingleCard } from '../single-card/single-card';
import {NgClass} from '@angular/common';
import {CardsServices} from '../../services/cards-services';
@Component({
  selector: 'app-card-list',
  standalone: true,
  templateUrl: './card-list.html',
  styleUrls: ['./card-list.scss'],
  imports: [
    SingleCard,
    NgClass
  ]
})
export class CardList implements OnInit {
  cards!: Card[];

  constructor(private cardServices: CardsServices) {
  }
  ngOnInit(): void {
    this.cards = this.cardServices.getAllCards();
  }
}
