import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Sparkles, Heart, Activity, ShieldCheck, Quote } from 'lucide-angular';

@Component({
  selector: 'app-founder-section',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './founder-section.component.html'
})
export class FounderSectionComponent {
  readonly SparklesIcon = Sparkles;
  readonly HeartIcon = Heart;
  readonly ShieldCheckIcon = ShieldCheck;
  readonly QuoteIcon = Quote;

  credentials = [
    { label: 'Nutrition & Dietetics', desc: 'Holistic nourishment from within' },
    { label: 'Yoga & Mindful Living', desc: 'Harmony of breath, movement & calm' },
    { label: 'Women’s Wellness', desc: 'Dedicated to everyday personal care rituals' },
    { label: 'Hair & Scalp Care', desc: 'Gentle, responsible botanical traditions' },
  ];
}
