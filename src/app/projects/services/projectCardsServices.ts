import { Injectable } from '@angular/core';
import { Card } from '../../core/models/Card';
import { Chip } from '../../core/models/Chip';
import { ProjectData } from '../models/ProjectData';

const DEFAULT_IMAGE = '/assets/images/photo.png';

@Injectable({
  providedIn: 'root'
})
export class ProjectCardsServices {

  private projects: Card[] = [
    new Card(
      'projet-1',
      'Application E-commerce',
      'Application e-commerce moderne avec Angular et Node.js incluant authentification, panier et paiements sécurisés.',
      [
        new Chip('Angular', 'skill'),
        new Chip('TypeScript', 'skill'),
        new Chip('Node.js', 'skill'),
        new Chip('MongoDB', 'skill'),
        new Chip('Stripe', 'skill')
      ],
      'project',
      {
        projectImages: [DEFAULT_IMAGE, DEFAULT_IMAGE, DEFAULT_IMAGE],
        longDescription: `Ce projet est une application e-commerce complète développée avec Angular en frontend et Node.js en backend.
          **Fonctionnalités principales :**
          - Catalogue produits avec filtres avancés
          - Panier persistant
          - Paiement via Stripe
          - Interface administrateur
          - Recommandations personnalisées

          **Défis techniques :** Gestion de l'état global avec NgRx, optimisation des performances, SEO.`,
        isDone: true
      } as ProjectData
    ),

    new Card(
      'projet-2',
      'Plateforme de Gestion de Tâches',
      'Application collaborative de gestion de tâches en temps réel avec React et Firebase.',
      [
        new Chip('React', 'skill'),
        new Chip('Firebase', 'skill'),
        new Chip('Material-UI', 'skill')
      ],
      'project',
      {
        projectImages: [DEFAULT_IMAGE, DEFAULT_IMAGE],
        longDescription: `Plateforme collaborative de gestion de tâches avec synchronisation en temps réel...`,
        isDone: false
      } as ProjectData
    )
  ];

  getAllProjects(): Card[] {
    return this.projects.map(card => card.clone());
  }

  getProjectByHeader(projectHeader: string): Card | undefined {
    const card = this.projects.find(card => card.header === projectHeader);

    if (card) {
      return card.clone();
    }
    return undefined;
  }
}
