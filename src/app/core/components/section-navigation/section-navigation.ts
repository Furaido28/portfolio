import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-section-navigation',
  standalone: true,
  imports: [],
  templateUrl: './section-navigation.html',
  styleUrl: './section-navigation.scss',
})
export class SectionNavigation {
  @Input() previousText: string = 'Section précédente';
  @Input() nextText: string = 'Prochaine section';

  @Output() previous = new EventEmitter<void>();
  @Output() next = new EventEmitter<void>();

  constructor(private router: Router) { }

  goToPrevious() {
    this.previous.emit();
  }

  goToNext() {
    this.next.emit();
  }
}
