import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header implements OnInit {
  isMenuOpen!: boolean;

  constructor(private router: Router) {
  }
  ngOnInit(): void {
    this.isMenuOpen = false;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  onImageClick() {
    this.router.navigateByUrl(`/`);
  }
}
