import {Injectable} from '@angular/core';
import {Card} from '../../core/models/Card';
import {Chip} from '../../core/models/Chip';

@Injectable({
  providedIn: 'root'
})
export class SkillsCardsService {
  private _backendCard: Card = new Card(
    'backend',
    'Développement Backend',
    'Spécialisé dans la création d\'APIs robustes et scalables, avec une expertise particulière dans les architectures microservices et les bases de données.',
    [
      new Chip('Node.js', 'skill'),
      new Chip('Python', 'skill'),
      new Chip('Java', 'skill'),
      new Chip('C#', 'skill'),
      new Chip('PHP', 'skill'),
      new Chip('Express.js', 'skill'),
      new Chip('NestJS', 'skill'),
      new Chip('Django', 'skill'),
      new Chip('Spring Boot', 'skill')
    ],
    'skills',
    {
      technologies: ['Node.js', 'Python', 'Java', 'C#', 'PHP'],
      frameworks: ['Express.js', 'NestJS', 'Django', 'Spring Boot', 'Laravel'],
      icon: 'backend-icon.svg'
    }
  );

  // Carte Frontend
  private _frontendCard: Card = new Card(
    'frontend',
    'Développement Frontend',
    'Passionné par la création d\'interfaces utilisateur modernes et réactives, avec un focus sur l\'expérience utilisateur et les performances.',
    [
      new Chip('HTML5', 'skill'),
      new Chip('CSS3', 'skill'),
      new Chip('JavaScript', 'skill'),
      new Chip('TypeScript', 'skill'),
      new Chip('Angular', 'skill'),
      new Chip('React', 'skill'),
      new Chip('Vue.js', 'skill'),
      new Chip('Tailwind CSS', 'skill')
    ],
    'skills',
    {
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript'],
      frameworks: ['Angular', 'React', 'Vue.js', 'Tailwind CSS', 'SASS'],
      icon: 'frontend-icon.svg'
    }
  );

  // Carte Fullstack
  private _fullstackCard: Card = new Card(
    'fullstack',
    'Expertise Fullstack',
    'Capacité à prendre en charge l\'ensemble du cycle de développement, de la conception à la mise en production, en assurant la cohérence entre frontend et backend.',
    [
      new Chip('Architecture API REST', 'skill'),
      new Chip('Intégration continue', 'skill'),
      new Chip('DevOps', 'skill'),
      new Chip('Tests automatisés', 'skill'),
      new Chip('Docker', 'skill'),
      new Chip('Git', 'skill'),
      new Chip('AWS', 'skill')
    ],
    'skills',
    {
      skills: ['Architecture API REST', 'Intégration continue', 'DevOps', 'Tests automatisés'],
      tools: ['Docker', 'Git', 'AWS', 'MongoDB', 'PostgreSQL', 'Redis'],
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
