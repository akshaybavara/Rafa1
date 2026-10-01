import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Sparkles, Check, Compass, ShieldCheck, Heart, Microscope, Eye } from 'lucide-angular';
import { BRAND_INFO } from '../../data/brand-data';

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './about-section.component.html'
})
export class AboutSectionComponent {
  brandInfo = BRAND_INFO;

  readonly SparklesIcon = Sparkles;
  readonly CheckIcon = Check;
  readonly CompassIcon = Compass;
  readonly ShieldCheckIcon = ShieldCheck;
  readonly HeartIcon = Heart;
  readonly MicroscopeIcon = Microscope;
  readonly EyeIcon = Eye;

  focusPillars = [
    { title: 'Thoughtful Formulation', icon: this.MicroscopeIcon, desc: 'Balanced botanical ratios tailored for hair integrity and effortless home preparation.' },
    { title: 'Quality', icon: this.SparklesIcon, desc: 'Carefully sourced raw botanicals without substandard fillers or coarse residues.' },
    { title: 'Responsible Innovation', icon: this.CompassIcon, desc: 'Honoring traditional botanical wisdom while applying modern cosmetic discipline.' },
    { title: 'Transparency', icon: this.EyeIcon, desc: 'Complete disclosure of ingredients and mandatory patch test advocacy.' },
    { title: 'Trust', icon: this.ShieldCheckIcon, desc: 'Backed by AAHAN VANMORE WELLNESS PVT. LTD. with ethical business values.' },
    { title: 'Nature-Inspired Ingredients', icon: this.HeartIcon, desc: 'Henna, Amla, Shikakai, Aloe Vera, and Kalonji working in seamless harmony.' },
    { title: 'Modern, Science-Supported Everyday Care', icon: this.MicroscopeIcon, desc: 'Rooted in evidence-backed personal-care and scalp wellness principles.' },
  ];
}
