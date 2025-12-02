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
        description: `
            Ce projet consiste en une solution d'automatisation complète développée en **VBA** (Visual Basic for Applications) au sein de **Microsoft Excel**. L'objectif principal était de rationaliser et de simplifier les tâches administratives complexes liées à la gestion des listes d'étudiants et à la communication ciblée.`,
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
      'projet-liste-courses-c',
      'Gestion de Listes de Courses avec Listes Chaînées',
      'Application console en langage C pour la gestion et l\'organisation de listes de courses, permettant d\'ajouter, modifier, supprimer et archiver des produits organisés par magasin.',
      [
        new Chip('Langage C', 'skill'),
        new Chip('Listes Chaînées', 'skill'),
        new Chip('Pointeurs', 'skill'),
        new Chip('Gestion de Fichiers (I/O)', 'skill')
      ],
      'project',
      {
        projectMainImage: 'assets/projets/projet-c/main.png',
        projectImages: ['assets/projets/projet-c/1.png',
        ],

        description: `Ce projet est une solution console en **langage C** visant à optimiser la préparation et l'utilisation des listes de courses.

        **Structures de Données Clés :**
        Le programme utilise des **listes chaînées** pour stocker dynamiquement les données, permettant une taille variable:
        * Les magasins forment une liste chaînée principale.
        * Chaque magasin contient la tête d'une liste chaînée interne de produits.

        **Fonctionnalités et Implémentation :**
        * **Gestion CRUD & Recherche :** L'utilisateur peut Ajouter, Modifier, ou Supprimer des produits en précisant leur catégorie, nom, marque, quantité, etc..
        * **Organisation & Filtrage :** La liste est structurée par **magasin spécifique**, et l'affichage peut être filtré par magasin ou montrer l'intégralité des produits.
        * **Archivage et Portabilité :** La liste peut être exportée (Archivée) dans un fichier pour conservation ou partage, et une liste existante peut être rechargée (Importée).
        * **Architecture Modulaire :** Le code est organisé en fichiers d'en-tête (.h) pour les prototypes et structures et en fichiers source (.c) pour l'implémentation.
        * **Bibliothèques Clés :** Utilisation de bibliothèques comme "stdlib.h" (malloc/free), "string.h" (strcpy/strcmp), et pour les fonctions d'affichage console (Sleep, system("cls")").`,
        isDone: true
    } as ProjectData),

    new Card(
      'projet-reciply',
      'Reciply : Site de Gestion de Menus et de Recettes',
      'Application web full-stack pour l\'enregistrement de recettes, la planification de repas hebdomadaires, la gestion collaborative par ménage et la génération de listes de courses automatiques.',
      [
        new Chip('HTML', 'skill'),
        new Chip('Bootstrap', 'skill'),
        new Chip('JavaScript', 'skill'),
        new Chip('AJAX', 'skill'),
        new Chip('PHP', 'skill'),
        new Chip('MySQL', 'skill')
      ],
      'project',
      {
        // Remplacez les chemins d'images par ceux de votre projet Reciply
        projectMainImage: 'assets/projets/projet-reciply/main.png',
        projectImages: ['assets/projets/projet-reciply/1.png',
          'assets/projets/projet-reciply/2.png',
          'assets/projets/projet-reciply/3.png',
          'assets/projets/projet-reciply/4.png'
        ],
        siteLink: 'https://reciply.ovh/',
        description: `Ce projet consiste en la création d'une **application web full-stack** complète visant à simplifier l'organisation culinaire et la gestion des repas quotidiens. L'objectif principal est de fournir aux utilisateurs un outil intuitif pour centraliser leurs recettes, **planifier leurs menus à la semaine**, et générer automatiquement leurs listes de courses.

        ---

        Architecture Technique

        L'application repose sur une stack moderne et éprouvée, intégrant l'interactivité côté client et la robustesse côté serveur :

        * **Frontend :** L'interface utilisateur est construite en **HTML** et **CSS**, enrichie par **JavaScript** pour l'interactivité. Elle utilise le framework **Bootstrap** pour le design responsive et emploie la technologie **AJAX** pour les communications asynchrones avec le serveur, garantissant une expérience utilisateur fluide.
        * **Backend & Base de données :** La logique applicative et le traitement des données sont gérés par **PHP**. La persistance et la gestion des informations (utilisateurs, ménages, recettes) sont assurées par **MySQL**.

        ---

        Fonctionnalités Clés et Collaboration

        Le cœur du projet réside dans ses fonctionnalités collaboratives et son système d'authentification sécurisé :

        * **Gestion des Ménages (Collaboration) :** Le système est conçu pour la collaboration en groupe d'utilisateurs, désignés comme un **"Ménage"**.
            * L'application gère la création de ce groupe, la suppression, l'adhésion, le retrait des membres, et la suppression du Ménage.
            * Seul le **Chef de Ménage** désigné possède les droits nécessaires pour ajouter ou retirer d'autres membres, ainsi que pour supprimer le groupe. Les utilisateurs simples peuvent quitter le Ménage de leur propre initiative.

        * **Authentification et Sécurité :**
            * L'accès au site est sécurisé par un système d'authentification complet, gérant l'inscription et la connexion (via **email** ou **pseudonyme**).
            * Les mots de passe sont protégés par le protocole de hachage **BCRYPT**, reconnu pour sa robustesse.
            * L'application utilise une **gestion de session sécurisée** (avec configuration de cookies HTTP-only, secure, samesite Lax) pour stocker de manière fiable le statut de l'utilisateur et son ID de Ménage.

        ---

        Rôles Utilisateur et Administration

        Trois niveaux d'accès distincts structurent l'application, dont un niveau d'administration complet :

        * **Rôles Définis :** L'application utilise une gestion des permissions via trois rôles principaux : **Admin**, **Users**, et le **Ménage** (qui est l'unité de collaboration).
        * **Panneau d'Administration :** Des interfaces dédiées permettent aux administrateurs de lister, visualiser et gérer tous les utilisateurs et les groupes existants.
        * **Contrôle des Permissions :** Le système permet à un administrateur de **modifier le rôle d'un autre utilisateur**, tout en assurant une mesure de sécurité essentielle qui empêche l'auto-modification de son propre rôle.

        ---

        Planification et Gestion du Contenu

        * **Planification des Repas :** Des pages dédiées (le "Planning") permettent de visualiser et d'organiser les repas sur un calendrier hebdomadaire, avec la possibilité d'ajouter des filtres lors de la sélection des recettes.
        * **Recettes :** Les utilisateurs peuvent consulter et **filtrer les recettes** par catégorie (entrée, plat, dessert...) ou par **régime alimentaire** (végétarien, sans gluten, etc.).`,
        isDone: true // ou false si le projet n'est pas complètement terminé
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
        // Remplacez 'DEFAULT_IMAGE' par les chemins réels de vos images.
        projectMainImage: 'assets/projets/projet-mario-kart-25/main.png',
        projectImages: ['assets/projets/projet-mario-kart-25/1.png',
                        'assets/projets/projet-mario-kart-25/2.png',
                        'assets/projets/projet-mario-kart-25/3.png',
                        'assets/projets/projet-mario-kart-25/4.png'
        ],
        description: `Ce projet d'intégration (UE 210) a consisté en la transformation du jeu de société "**Tu te mets combien ?**" en une application de bureau thématique "**Mario Kart 25**", développée en **Java** avec **JavaFX** pour l'interface utilisateur.

        **Fonctionnalités et Techniques Clés :**
        - **Mécanisme de Quiz/Déplacement :** Le joueur répond à un nombre de questions (max 4) dont la difficulté est choisie pour avancer du même nombre de cases sur un plateau de 40 cases.
        - **Système d'Objets (Items) :** Une innovation majeure inspirée de Mario Kart, permettant d'utiliser des bonus ou malus (comme Carapace Bleue, Éclair, Champignon) qui prennent effet au prochain tour des joueurs ciblés. Ce système utilise le design pattern **Strategy**.
        - **Design Patterns :** Emploi du pattern **Factory Method** pour la création des cartes de questions (OrangeCard, GreenCard, etc.), et du pattern **Strategy** pour les effets d'objets.
        - **Gestion de Données :** Chargement des cartes de questions à partir de fichiers **JSon** via la librairie **GSon**.
        - **Tests Unitaires :** Utilisation de **JUnit 5** pour vérifier les fonctionnalités des classes du package 'models' (Player, GameContext, Board, etc.) et des effets d'objets, avec une couverture de 100% pour les effets d'items.
        - **Conduite de Projet :** Le projet a été géré en équipe en utilisant la méthode **Scrum** (avec rotation des rôles) sur 3 Sprints après un Sprint 0 d'analyse.

        **Défis Notables :**
        - **Implémentation de Patrons :** Application rigoureuse des design patterns Factory Method et Strategy.
        - **Gestion d'Équipe :** Répartition efficace des tâches et maintien de la motivation sur un projet de cette ampleur.
        - **Interopérabilité :** Gestion des 'IOException' lors du chargement des ressources (JSon, images, musique).`,
        isDone: true
      } as ProjectData
      ),

    new Card(
      'projet-reseau-ip-25-26',
      'Outil d\'Administration Réseau IP (IPv4)',
      'Application desktop en Python/Tkinter pour les administrateurs réseau. Elle offre des outils de calcul d\'adresses réseau (Classful/Classless), de vérification d\'appartenance, de découpe (FLSM) et de faisabilité (VLSM), avec persistance des données via SQLite.',
      [
        new Chip('Python', 'skill'),
        new Chip('Tkinter', 'skill'),
        new Chip('SQLite3', 'skill'),
      ],
      'project',
      {
        projectMainImage: 'assets/projets/projet-reseau/main.png',
        projectImages: ['assets/projets/projet-reseau/1.png',
                        'assets/projets/projet-reseau/6.png',
                        'assets/projets/projet-reseau/2.png',
                        'assets/projets/projet-reseau/3.png',
                        'assets/projets/projet-reseau/4.png',
                        'assets/projets/projet-reseau/5.png',
      ],
        description: `Ce projet consiste à développer un outil complet d'assistance à l'administrateur réseau pour la gestion de l'adressage **IPv4**[cite: 400, 420]. [cite_start]L'application a été réalisée en **Python** avec **Tkinter** pour l'interface graphique.

        **Fonctionnalités Clés :**
        - **Calcul d'Adresse Réseau :** Détermination de l'adresse réseau, de l'adresse de broadcast, et de la plage utilisable à partir d'une IP et d'un masque, en modes **Classless (CIDR)** ou **Classful**.
        - **Découpe (FLSM) :** Création et affichage d'un plan d'adressage détaillé (SR, Réseau, Masque, 1ère/Dernière IP, Broadcast) à partir du nombre d'IPs total ou du nombre de sous-réseaux souhaités.
        - **Vérification d'IP :** Confirmation de l'appartenance d'une adresse IP à un réseau donné.
        - **Vérification VLSM :** Test de la faisabilité d'une découpe **VLSM** pour un réseau et des besoins en hôtes spécifiques.
        - **Gestion de Données :** Utilisation de **SQLite3** pour stocker les découpes enregistrées et les paramètres de l'application.

        **Contraintes Techniques et Sécurité :**
        - **Sécurisation de l'Accès :** L'accès à l'application est sécurisé par un **mot de passe global haché** et stocké dans la base de données.
        - **Validation des Entrées :** Mise en place de validations strictes pour garantir le format IPv4 correct des IP et des masques, et empêcher l'encodage de valeurs incohérentes ou obligatoires manquantes.
        - **Ergonomie :** L'interface a été conçue pour être simple et intuitive, affichant les résultats et les erreurs via des **notifications claires**.

        Le projet a été réalisé avec le langage **Python** et a mis en œuvre des tests (tests d'entrée, de calcul, d'accès et d'interface) pour garantir une bonne expérience utilisateur.`,
        isDone: true
      } as ProjectData
    ),

    new Card(
      `projet-zombie-high-school`,
      `Zombie High School Brainrot - Jeu d'Action/Survie 2D`,
      `Conception d'un jeu d'action/survie en vue du dessus, style pixel-art/8-bit, où le joueur explore un lycée infesté de "zombies brainrot", gère son inventaire d'armes improvisées, et progresse en battant des boss pour récupérer des fragments de clé.`,
      [
        new Chip('C++', 'skill'),
        new Chip('SFML', 'skill'),
        new Chip('Design Pattern (Command/Flyweight)', 'skill'),
        new Chip('Tests Unitaires (Catch2)', 'skill'),
        new Chip('Scrum', 'skill')
      ],
      'project',
      {
        // Remplacez 'DEFAULT_IMAGE' par des chemins réels de maquettes ou d'artworks si vous en avez.
        projectMainImage: 'assets/projets/projet-zombie-high-school/main.svg', // Image conceptuelle du jeu ou du personnage
        projectImages: [
          'assets/projets/projet-zombie-high-school/1.png',
        ],
        description: `Ce projet se concentre sur la conception et l'analyse détaillée d'un jeu vidéo d'action/survie en **2D Top-Down** (vue du dessus) se déroulant dans un lycée post-apocalyptique. Le jeu adopte une esthétique **Pixel-Art / 8-bit** et une ambiance horrifique décalée.
        **Concept et Gameplay :**
        - **Exploration et Progression :** Le jeu est structuré autour de quatre zones clés (trois bâtiments à difficulté croissante et une cour centrale) que le joueur doit traverser.
        - **Système de Clés :** La progression est gérée par des boss (un par bâtiment) qui lâchent un **fragment de clé**. Récupérer les trois fragments est nécessaire pour accéder à la zone finale.
        - **Combat et Survie :** Le joueur utilise des **armes improvisées** (balai, livre, extincteur, etc.) ayant une durabilité limitée, et doit gérer sa barre de vie avec des objets de soin.
        - **Ennemis :** La menace provient de deux types de zombies (classiques lents, rapides) et de boss aux patterns d'attaque spécifiques.
        - **Mécanique Aléatoire :** Intégration d'une **Caisse Mystère** qui peut fournir des bonus ou des malus aléatoires, ajoutant un élément d'incertitude au gameplay.

        **Analyse Technique et Structurelle :**
        - **Level Design :** La difficulté augmente progressivement via la densité d'ennemis et la complexité des niveaux (couloirs étroits, risque d'encerclement).
        - **Inventaire et Objets :** Gestion d'un inventaire permettant de changer d'arme rapidement, chaque arme ayant des caractéristiques de portée et de vitesse uniques.
        - **Product Backlog :** Le rapport inclut un **Product Backlog** détaillé, structuré par fonctionnalités (Joueur, Objets, Ennemis, Level Design, Narration), formulé en *User Stories* pour guider le développement futur.

        **Conditions de Victoire :** Récupérer les trois fragments de clé, battre le boss final dans la cour centrale et sortir de l'école.`,

        isDone: false
      } as ProjectData
    ),

    new Card(
      'projet-messagerie-locale-3bi',
      'Application de Messagerie Locale Sécurisée',
      `Conception d'une messagerie local`,
      [
        new Chip('C#', 'skill'),
        new Chip('Scrum', 'skill'),
      ],
      'project',
      {
        // Il s'agit d'un projet de planification, les images seraient des diagrammes d'architecture réseau ou des maquettes d'interface.
        projectMainImage: 'assets/projets/projet-messagerie-local/main.png',
        projectImages: [
          'assets/projets/projet-messagerie-local/1.png',
        ],
        description: ` `,
        isDone: false
      } as ProjectData
    ),

    new Card(
      'projet-mood-gallery',
      `Mood Gallery - Journal Visuel d'Humeur Mobile`,
      `Développement d'une application mobile de type "journal visuel" permettant aux utilisateurs de capturer des photos selon leur humeur (joie, calme, stress, etc.) et de visualiser l'évolution de leurs émotions grâce à une galerie personnelle et des statistiques.`,
      [
        new Chip('Flutter', 'skill'),
        new Chip('Développement Mobile', 'skill'),
        new Chip('Express.js', 'skill'),
      ],
      'project',
      {
        // Remplacez 'DEFAULT_IMAGE' par des chemins réels de maquettes ou d'artworks.
        projectMainImage: 'assets/projets/projet-mood-gallery/main.png',
        projectImages: ['assets/projets/projet-mood-gallery/1.png'
        ],
        description: `Ce projet consiste à développer **Mood Gallery**, une application mobile de journalisation émotionnelle, construite avec **Flutter** et adoptant le style **Material Design** pour une interface moderne et fluide.

        **Fonctionnalités et Concept :**
        - **Capture d'Humeur :** Les utilisateurs peuvent prendre jusqu'à trois photos par jour (espacées de 30 minutes) selon leur humeur sélectionnée (joie, stress, calme, etc.).
        - **Journal Visuel :** Chaque entrée contient l'humeur, la photo, la date et une description optionnelle, créant un historique permettant la compréhension de l'état émotionnel.
        - **Galerie et Interactivité :** La galerie affiche les photos sous forme de cartes, triables par date ou humeur. La page de détail intègre des gestes interactifs tels que le **zoom (pincement), le swipe** et le **double tap pour les favoris**.
        - **Statistiques :** Une page optionnelle affiche un graphique montrant la **répartition des émotions** sur une période donnée.

        **Aspects Techniques et Backend :**
        - **Stack :** Frontend développé en **Flutter** avec des animations Material. [cite_start]Backend géré par un mock **Express.js** qui s'occupe de l'authentification et de l'enregistrement des données.
        - **API :** Le contrat d'API est documenté en format **OpenAPI (Swagger)**.
        - **Sécurité :** L'application inclut un système d'**authentification** pour garantir la séparation et la personnalisation des galeries et des statistiques de chaque utilisateur.`,
        isDone: false
      } as ProjectData
      ),
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
