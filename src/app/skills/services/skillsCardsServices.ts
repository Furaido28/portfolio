import {Injectable} from '@angular/core';
import {Card} from '../../core/models/Card';
import {Chip} from '../../core/models/Chip';

@Injectable({
  providedIn: 'root'
})
export class SkillsCardsService {
  // Carte Backend
  private _backendCard: Card = new Card(
    'backend',
    'Développement Backend',
    "Développement d’APIs et de fonctionnalités backend fiables, avec une bonne compréhension des bases du serveur, de la logique métier et des bases de données.",
    [
      new Chip('PHP', 'skill'),
      new Chip('Java', 'skill'),
      new Chip('Spring Boot', 'skill'),
      new Chip('.NET', 'skill'),
      new Chip('C#', 'skill'),
      new Chip('Python', 'skill'),
      new Chip('C', 'skill'),
      new Chip('C++', 'skill'),
      new Chip('MySQL', 'skill'),
      new Chip('AJAX', 'skill')
    ],
    'skills',
    {
      technologies: ['PHP', 'Java', 'Python', 'C#', 'C', 'C++'],
      frameworks: ['Spring Boot', '.NET'],
      databases: ['MySQL'],
      tools: ['WampServer'],
      icon: 'backend-icon.svg'
    }
  );

  // Carte Frontend
  private _frontendCard: Card = new Card(
    'frontend',
    'Développement Frontend',
    'Gestion complète d’un projet : du développement frontend et backend jusqu’à l’intégration, les tests et le déploiement.',
    [
      new Chip('HTML', 'skill'),
      new Chip('CSS', 'skill'),
      new Chip('SCSS', 'skill'),
      new Chip('JavaScript', 'skill'),
      new Chip('TypeScript', 'skill'),
      new Chip('Angular', 'skill')
    ],
    'skills',
    {
      technologies: ['HTML', 'CSS', 'SCSS', 'JavaScript', 'TypeScript'],
      frameworks: ['Angular'],
      icon: 'frontend-icon.svg'
    }
  );

  // Carte Fullstack
  private _fullstackCard: Card = new Card(
    'fullstack',
    'Développement Fullstack',
    'Capacité à gérer l’ensemble de la chaîne de développement : frontend, backend, intégration et déploiement.',
    [
      new Chip('Architecture API REST', 'skill'),
      new Chip('Intégration continue', 'skill'),
      new Chip('DevOps', 'skill'),
      new Chip('Docker', 'skill'),
      new Chip('Git', 'skill')
    ],
    'skills',
    {
      skills: ['Architecture API REST', 'Intégration continue', 'DevOps', 'Tests automatisés'],
      tools: ['Docker', 'Git'],
      other: ['VBA'],
      icon: 'fullstack-icon.svg'
    }
  );

  getBackendCard(): Card {
    return this._backendCard;
  }

  getFrontendCard(): Card {
    return this._frontendCard;
  }

  getFullstackCard(): Card {
    return this._fullstackCard;
  }
}
