import {Component, EventEmitter, HostListener, Input, Output} from '@angular/core';

@Component({
  selector: 'app-image-viewers',
  imports: [],
  templateUrl: './image-viewers.html',
  styleUrl: './image-viewers.scss',
})
export class ImageViewers {
  // Image à afficher dans la lightbox

  @Input() imageUrl!: string | null;
  @Output() close = new EventEmitter<void>();

  closeLightbox() {
    this.close.emit();
  }

  @HostListener('document:keydown.escape')
  onEsc() {
    this.closeLightbox();
  }
}
