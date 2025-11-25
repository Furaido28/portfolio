import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {SectionNavigation} from '../core/components/section-navigation/section-navigation';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    SectionNavigation
  ],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  constructor(private router: Router) {
  }

  protected goToNextSection() {
    this.router.navigateByUrl('');
  }

  protected goToPreviousSection() {
    this.router.navigateByUrl('/projects');
  }
}
