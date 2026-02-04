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
      'projet-vba',
      'Génération de Listes & Communication Automatisée',
      'Application développée sous Excel/VBA pour l\'extraction, la génération de documents (PDF/Excel) et l\'envoi d\'e-mails ciblés aux étudiants selon divers critères de sélection (sections, classes).',
      [
        new Chip('VBA', 'skill'),
        new Chip('Excel', 'skill'),
        new Chip('Automatisation', 'skill'),
        new Chip('Gestion de données', 'skill'),
        new Chip('Formulaires Utilisateur', 'skill')
      ],
      'project',
      {
        projectMainImage: 'assets/projets/projet-vba/main.png',
        projectImages: ['assets/projets/projet-vba/1.png',
                        'assets/projets/projet-vba/2.png',
                        'assets/projets/projet-vba/3.png',
                        'assets/projets/projet-vba/4.png',
                        'assets/projets/projet-vba/5.png',
                        'assets/projets/projet-vba/6.png',
                        'assets/projets/projet-vba/7.png'
        ],
        description: `Ce projet consiste en une solution d'automatisation complète développée en **VBA** (Visual Basic for Applications) au sein de **Microsoft Excel**. L'objectif principal était de rationaliser et de simplifier les tâches administratives complexes liées à la gestion des listes d'étudiants et à la communication ciblée.`,
        fonctionalites: [
          `**Extraction de Données :** Filtre dynamique des étudiants basé sur des critères multiples (classes, sections, orientation, etc.).`,
          `**Génération de Documents :** Création et export automatiques des listes filtrées vers des formats **PDF** ou **Excel** pour l'impression ou l'archivage.`,
          `**E-mailing Ciblé :** Module d'envoi d'e-mails permettant de communiquer avec une **section** ou une **classe spécifique** en utilisant les données extraites.`,
          `**Interface Utilisateur :** Utilisation de **Formulaires Utilisateur (UserForms)** pour une interaction intuitive et la saisie des critères de filtrage.`
        ],
        isDone: true
      } as ProjectData
    ),

    new Card(
      'projet-mario-kart-25',
      'Mario Kart 25 - Jeu de Plateau et de Culture Générale',
      'Développement d\'un jeu de plateau numérique (inspiré de "Tu te mets combien ?") avec une thématique "Mario Kart 25" en JavaFX, intégrant un système d\'objets bonus/malus et des questions-réponses de difficulté variable.',
      [
        new Chip('JavaFX', 'skill'),
        new Chip('Java', 'skill'),
        new Chip('Design Pattern (Factory/Strategy)', 'skill'),
        new Chip('Tests Unitaires (JUnit)', 'skill'),
        new Chip('Scrum', 'skill')
      ],
      'project',
      {
        projectMainImage: 'assets/projets/projet-mario-kart-25/main.png',
        projectImages: ['assets/projets/projet-mario-kart-25/1.png',
                        'assets/projets/projet-mario-kart-25/2.png',
                        'assets/projets/projet-mario-kart-25/3.png',
                        'assets/projets/projet-mario-kart-25/4.png'
        ],
        description: `Ce projet d'intégration (UE 210) a consisté en la transformation du jeu de société "**Tu te mets combien ?**" en une application de bureau thématique "**Mario Kart 25**", développée en **Java** avec **JavaFX** pour l'interface utilisateur.`,
        fonctionalites: [
          `**Mécanique de Quiz & Déplacement :** Le joueur avance sur un plateau de 40 cases en répondant à une série de questions (jusqu’à 4) dont il choisit la difficulté.`,
          `**Système d’Objets (Items) :** Inspiré de *Mario Kart*, le joueur peut utiliser des bonus et malus (Carapace Bleue, Éclair, Champignon...) dont les effets s’appliquent au tour suivant des joueurs ciblés. Implémenté via le pattern **Strategy**.`,
          `**Design Patterns :** **Factory Method** pour créer dynamiquement les différentes cartes de questions (OrangeCard, GreenCard, etc.) et **Strategy** pour gérer les effets des objets.`,
          `**Gestion des Données :** Chargement des cartes de questions depuis un fichier **JSON** grâce à la librairie **Gson**.`,
          `**Tests Unitaires :** Suite de tests éffectués sous **JUnit 5**, couvrant les classes principales ainsi que l’ensemble des effets d’items.`,
          `**Conduite de Projet :** Gestion en équipe selon la méthode **Scrum**, avec rotation des rôles et organisation en 4 Sprints après un Sprint 0 dédié à l’analyse.`
        ],
        isDone: true
      } as ProjectData
    ),

    new Card(
      'projet-reseau-ip',
      "Outil d'Administration Réseau IP (IPv4)",
      "Application desktop développée en Python/Tkinter pour assister les administrateurs réseau dans la gestion, la vérification et la planification d'adressage IPv4 (Classful, CIDR, FLSM, VLSM), avec persistance des données via SQLite.",
      [
        new Chip('Python', 'skill'),
        new Chip('Tkinter', 'skill'),
        new Chip('SQLite3', 'skill'),
      ],
      'project',
      {
        projectMainImage: 'assets/projets/projet-reseau/main.png',
        projectImages: [
          'assets/projets/projet-reseau/1.png',
          'assets/projets/projet-reseau/6.png',
          'assets/projets/projet-reseau/2.png',
          'assets/projets/projet-reseau/3.png',
          'assets/projets/projet-reseau/4.png',
          'assets/projets/projet-reseau/5.png',
        ],

        description: ` Ce projet consiste en la création d’un outil complet d’assistance pour un administrateur réseau, dédié à l’analyse et à la planification de l’adressage **IPv4**. L’application a été réalisée en **Python** avec **Tkinter** pour l’interface graphique, et **SQLite3** pour la persistance des données.`,
        fonctionalites: [
          `**Calcul d'Adresse Réseau :** Détermination automatique de l’adresse réseau, broadcast et plage utilisable à partir d’une IP et d’un masque, en modes **CIDR** ou **Classful**.`,
          `**Découpe FLSM (Subnetting Statique) :** Génération d’un plan d’adressage complet (SR, masque, 1ère/Dernière IP, broadcast) selon le nombre total d’IPs ou de sous-réseaux souhaités.`,
          `**Vérification d’Appartenance :** Contrôle permettant de vérifier si une adresse IP appartient à un réseau donné.`,
          `**Analyse VLSM :** Vérification de la faisabilité d’une découpe **VLSM** selon les besoins en hôtes (sous-réseaux de tailles différentes).`,
          `**Gestion de Données :** Stockage des découpes et paramètres dans une base **SQLite3**, permettant de conserver un historique des calculs.`,
          `**Sécurisation de l’Accès :** Protection de l’application via un **mot de passe global haché**, stocké dans la base de données.`,
          `**Validation des Entrées :** Vérification stricte des IP, masques et valeurs nécessaires pour éviter les formats incorrects ou incohérents.`,
          `**Interface Conçue pour l’Ergonomie :** Interface simple, intuitive et réactive, avec affichage clair des résultats et des erreurs via des **notifications dédiées**.`
        ],
        isDone: true
      } as ProjectData
    ),

    new Card(
      `projet-zombie-high-school`,
      `Zombie High School Brainrot – Jeu d'Action/Survie 2D`,
      `Conception d’un jeu d’action/survie **2D top-down** au style **Pixel-Art / 8-bit**, se déroulant dans un lycée post-apocalyptique infesté de “zombies brainrot”. Le joueur explore, combat, collecte des fragments de clé et affronte des boss pour progresser.`,
      [
        new Chip('C++', 'skill'),
        new Chip('SFML', 'skill'),
        new Chip('Design Pattern (Command/Flyweight)', 'skill'),
        new Chip('Tests Unitaires (Catch2)', 'skill'),
        new Chip('Scrum', 'skill')
      ],
      'project',
      {
        projectMainImage: 'assets/projets/projet-zombie-high-school/main.png',
        projectImages: [
          'assets/projets/projet-zombie-high-school/1.png',
          'assets/projets/projet-zombie-high-school/2.png'
        ],
        description: `Ce projet traite la **conception et l’analyse** d’un jeu d’action/survie en **2D Top-Down**, entièrement imaginé dans un univers Pixel-Art horrifique et parodique. Le joueur traverse différentes zones d'une école, affronte des zombies aux comportements variés, gère son inventaire d’armes improvisées et récupère des fragments de clé pour accéder au boss final.`,
        fonctionalites: [
          `**Exploration & Progression :** Le lycée est divisé en quatre zones (trois bâtiments + cour centrale). La difficulté augmente selon la densité d’ennemis et la structure des niveaux.`,
          `**Système de Clés & Boss :** Chaque bâtiment contient un boss délivrant un **fragment de clé**. Les trois fragments sont nécessaires pour accéder à la zone finale et au boss ultime.`,
          `**Combat & Survie :** Le joueur utilise des **armes improvisées** (balai, livre, extincteur…) avec durabilité, caractéristiques de portée et vitesse différentes, ainsi que des objets de soin.`,
          `**Types d’Ennemis :** Deux classes de zombies (lents classiques / rapides agressifs) et des boss dotés de patterns d’attaque spécifiques.`,
          `**Mécanique Aléatoire :** Une **Caisse Mystère** peut accorder bonus ou malus de manière aléatoire, introduisant un élément de risque/reward dans la progression.`,
          `**Level Design :** Les environnements proposent des espaces ouverts, couloirs étroits, zones d’encerclement et placements stratégiques d’ennemis.`,
          `**Inventaire & Objets :** Système d’inventaire permettant de changer d’arme selon la situation.`,
          `**Analyse Technique :** Utilisation des patterns **Command** (gestion des actions du joueur) et **Flyweight** (optimisation des entités répétitives).`,
          `**Product Backlog :** Rédaction d’un backlog complet organisé en User Stories pour Joueur, Objets, Ennemis, Level Design et Narration.`,
          `**Conditions de Victoire :** Récupérer les trois fragments, vaincre le boss final dans la cour et s’échapper de l'école.`
        ],
        isDone: true
      } as ProjectData
    ),

    new Card(
      'projet-messagerie-locale-3bi',
      'Application de Messagerie Locale Sécurisée',
      `Développement d’une application de messagerie instantanée en **C#**, permettant à plusieurs utilisateurs d’un même réseau local d’échanger des messages en temps réel, de gérer leurs contacts et de conserver l’historique des conversations.`,
      [
        new Chip('C#', 'skill'),
        new Chip('Sockets TCP/UDP', 'skill'),
        new Chip('Architecture Client/Serveur', 'skill'),
        new Chip('Scrum', 'skill'),
      ],
      'project',
      {
        projectMainImage: 'assets/projets/projet-messagerie-local/main.png',
        projectImages: [
          'assets/projets/projet-messagerie-local/1.png',
          'assets/projets/projet-messagerie-local/2.png',
          'assets/projets/projet-messagerie-local/3.png',
          'assets/projets/projet-messagerie-local/4.png',
          'assets/projets/projet-messagerie-local/5.png'
        ],

        description: `
      Ce projet consiste à concevoir une **messagerie locale instantanée** en **C#**, capable de détecter et communiquer avec les utilisateurs présents sur le même réseau local.
      L’application intègre un système d’authentification, une interface de discussion en temps réel, une gestion des contacts et un affichage structuré des informations utilisateur.
      Cette application est développée en équipe selon la méthode **Scrum**, avec création de maquettes et planification par sprints.
    `,

        fonctionalites: [
          `**Messagerie Instantanée Locale :** Envoi et réception de messages en temps réel entre utilisateurs connectés au même réseau (LAN).`,
          `**Gestion des Contacts :** Possibilité d’ajouter des utilisateurs via leur nom, IP et port, avec affichage de la liste des contacts détectés.`,
          `**Conversations Structurées :** Zone de discussion dédiée pour chaque contact, permettant de consulter l’historique et d’envoyer de nouveaux messages.`,
          `**Authentification :** Écran de **login** et **register** permettant la création d’un nom d’utilisateur unique et la gestion de sessions.`,
          `**Profil Utilisateur :** Présentation des informations personnelles (nom, IP, port) avec possibilité de changer l’image de profil.`,
          `**Détection des Utilisateurs :** Affichage des utilisateurs en ligne et possibilité de communiquer avec des utilisateurs enregistrés mais temporairement hors ligne (si accessible).`,
          `**Interface Inspirée des UIs de Messagerie :** Plusieurs fenêtres (Login, Register, Messagerie, Add User, Profil) basées sur les maquettes réalisées (image fournie).`,
          `**Architecture Réseau :** Communication basée sur des **sockets C#** (TCP/UDP selon implémentation) pour transmettre les messages entre machines locales.`
        ],

        isDone: true
      } as ProjectData
    ),

    new Card(
      'projet-mood-gallery',
      `Mood Gallery – Journal Visuel d'Humeur Mobile`,
      `Application mobile de journalisation émotionnelle développée en **Flutter**, permettant aux utilisateurs de capturer leur humeur quotidiennement à travers des photos et d’observer l’évolution de leur bien-être grâce à une galerie visuelle et des statistiques.`,
      [
        new Chip('Développement Mobile', 'skill'),
        new Chip('Flutter', 'skill'),
        new Chip('Express.js', 'skill'),
      ],
      'project',
      {
        projectMainImage: 'assets/projets/projet-mood-gallery/main.png',
        projectImages: [
          'assets/projets/projet-mood-gallery/1.png',
          'assets/projets/projet-mood-gallery/2.png',
          'assets/projets/projet-mood-gallery/3.png',
          'assets/projets/projet-mood-gallery/4.png'
        ],
        description: `**Mood Gallery** est une application mobile axée sur la journalisation émotionnelle. Conçue avec **Flutter** et inspirée des principes **Material Design**, elle offre une expérience fluide permettant de capturer des humeurs sous forme de photos, de consulter une galerie d’émotions et d’obtenir des statistiques visuelles sur son état émotionnel.`,
        fonctionalites: [
          `**Capture d’Humeur :** Possibilité de prendre jusqu’à trois photos par jour (espacées de 30 minutes), associées à une humeur sélectionnée (joie, stress, calme, etc.).`,
          `**Journal Visuel :** Chaque entrée comprend une photo, une humeur, une description optionnelle et une date, formant un historique émotionnel clair et organisé.`,
          `**Galerie Interractive :** Affichage sous forme de cartes, triables par **date** ou par **humeur**. Les pages de détails supportent le **zoom (pinch)**, le **swipe** et le **double-tap pour ajouter en favori**.`,
          `**Statistiques :** Visualisation de la répartition des émotions sur une période donnée via un graphique dédié.`,
          `**Backend & Architecture :** Backend mock en **Express.js** gérant l’authentification et l’enregistrement des données, avec documentation du contrat d’API via **OpenAPI (Swagger)**.`,
          `**Sécurité :** Système d’authentification garantissant la séparation des galeries et la personnalisation de l’expérience utilisateur.`
        ],

        isDone: true
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
