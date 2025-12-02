import {Injectable} from '@angular/core';
import {Card} from '../../core/models/Card';

@Injectable({
  providedIn: 'root'
})
export class SkillsCardsService {
  // Carte Backend
  private _backendCard: Card = new Card(
    'backend',
    'Développement Backend',
    "Développement d’APIs et de fonctionnalités backend fiables, avec une bonne compréhension des bases du serveur, de la logique métier et des bases de données.",
    [ ],
    'skills',
    {
      technologies: ['PHP', 'Java', 'Python', 'C#', 'C', 'C++'],
      frameworks: ['Spring Boot', 'ASP.NET'],
      databases: ['MySQL']
    }
  );

  // Carte Frontend
  private _frontendCard: Card = new Card(
    'frontend',
    'Développement Frontend',
    'Gestion complète d’un projet : du développement frontend et backend jusqu’à l’intégration, les tests et le déploiement.',
    [ ],
    'skills',
    {
      technologies: ['HTML', 'CSS', 'SCSS', 'JavaScript', 'TypeScript'],
      frameworks: ['Angular', 'React - (en apprentissage)']
    }
  );

  // Carte Fullstack
  private _fullstackCard: Card = new Card(
    'fullstack',
    'Développement Fullstack',
    'Capacité à gérer l’ensemble de la chaîne de développement : frontend, backend, intégration et déploiement.',
    [ ],
    'skills',
    {
      skills: ['Architecture API REST', 'Intégration continue', 'DevOps', 'Tests automatisés'],
      tools: ['Git', 'Docker', 'WampServer']
    }
  );

  getBackendCard(): Card {
    return this._backendCard.clone();
  }

  getFrontendCard(): Card {
    return this._frontendCard.clone();
  }

  getFullstackCard(): Card {
    return this._fullstackCard.clone()
  }
}
