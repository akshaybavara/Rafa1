import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Sparkles, MapPin, Mail, Phone, ShieldCheck, Heart, ArrowUp, Instagram, Linkedin, Facebook, Youtube } from 'lucide-angular';
import { BRAND_INFO } from '../../data/brand-data';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './footer.component.html'
})
export class FooterComponent {
  @Output() openNotifyModal = new EventEmitter<void>();
  @Output() openPatchTestModal = new EventEmitter<void>();

  readonly MapPinIcon = MapPin;
  readonly ShieldCheckIcon = ShieldCheck;
  readonly ArrowUpIcon = ArrowUp;
  readonly InstagramIcon = Instagram;
  readonly LinkedinIcon = Linkedin;
  readonly FacebookIcon = Facebook;
  readonly YoutubeIcon = Youtube;

  brandInfo = BRAND_INFO;

  navLinks = [
    { label: 'About RAFA', href: '#about' },
    { label: 'Flagship Product', href: '#product' },
    { label: 'Botanical Ingredients', href: '#ingredients' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Why RAFA', href: '#why-rafa' },
    { label: 'FAQs', href: '#faqs' },
    { label: 'Contact', href: '#contact' },
  ];

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  showAlert(message: string) {
    alert(message);
  }
}
