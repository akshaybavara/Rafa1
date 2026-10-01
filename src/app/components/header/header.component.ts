import { Component, EventEmitter, HostListener, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Menu, X, Sparkles, Bell } from 'lucide-angular';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './header.component.html',
  animations: [
    trigger('slideDown', [
      transition(':enter', [
        style({ opacity: 0, height: 0 }),
        animate('250ms ease-in-out', style({ opacity: 1, height: '*' }))
      ]),
      transition(':leave', [
        animate('250ms ease-in-out', style({ opacity: 0, height: 0 }))
      ])
    ])
  ]
})
export class HeaderComponent {
  @Output() openNotifyModal = new EventEmitter<void>();

  readonly MenuIcon = Menu;
  readonly XIcon = X;
  readonly SparklesIcon = Sparkles;
  readonly BellIcon = Bell;

  isScrolled = false;
  mobileMenuOpen = false;
  activeSection = 'home';

  navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About RAFA', href: '#about', id: 'about' },
    { label: 'Product', href: '#product', id: 'product' },
    { label: 'Ingredients', href: '#ingredients', id: 'ingredients' },
    { label: 'How It Works', href: '#how-it-works', id: 'how-it-works' },
    { label: 'Why RAFA', href: '#why-rafa', id: 'why-rafa' },
    { label: 'FAQs', href: '#faqs', id: 'faqs' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 30;

    const sections = ['home', 'about', 'product', 'ingredients', 'how-it-works', 'why-rafa', 'faqs', 'contact'];
    for (const section of sections) {
      const el = document.getElementById(section);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 140 && rect.bottom >= 140) {
          this.activeSection = section;
          break;
        }
      }
    }
  }

  handleNavClick(event: Event, href: string) {
    event.preventDefault();
    this.mobileMenuOpen = false;
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }
}
