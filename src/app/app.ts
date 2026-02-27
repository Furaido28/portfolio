import { Component, signal, OnInit } from '@angular/core';
import { Header } from './core/components/header/header';
import { RouterOutlet } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    Header,
    RouterOutlet
  ],
  templateUrl: './app.html'
})
export class App implements OnInit {
  protected readonly title = signal('portfolio');

  constructor(private meta: Meta, private titleService: Title) {}

  ngOnInit() {
    // Définit le titre de l'onglet
    this.titleService.setTitle('Ethan | Développeur Fullstack Junior');

    // Ajoute les balises pour les réseaux sociaux et le SEO
    this.meta.addTags([
      { name: 'description', content: 'Découvrez mon portfolio : projets innovants et expertise Angular.' },
      { name: 'author', content: 'Ethan' },
      { name: 'keywords', content: 'Angular, Portfolio, Développeur, Fullstack' },

      { property: 'og:title', content: 'Ethan | Portfolio' },
      { property: 'og:description', content: 'Explorez mes réalisations et mon parcours technique.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://ethan-flipo.be' },
      { property: 'og:image', content: 'https://ethan-flipo.be/assets/images/photo.png' },
    ]);
  }
}
