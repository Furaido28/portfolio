import {Component, Input} from '@angular/core';
import { Card } from '../../../core/models/Card';
import {ImageViewers} from '../../../core/components/image-viewers/image-viewers';

@Component({
  selector: 'app-project-details-card',
  standalone: true,
  templateUrl: './project-details-card.html',
  imports: [
    ImageViewers
  ],
})
export class ProjectDetailsCard {
  @Input() card!: Card;
  lightboxImage: string | null = null;

  formattedText(text:string): string {
    return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  }

  setLightboxImage(img: string) {
    this.lightboxImage = img;
  }

  closeLightbox() {
    this.lightboxImage = null;
    document.body.style.overflow = '';
  }
}
