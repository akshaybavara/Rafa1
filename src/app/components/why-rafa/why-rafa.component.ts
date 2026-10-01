import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Sparkles, HeartHandshake, ShieldCheck, Sprout, PackageCheck, Eye, Award } from 'lucide-angular';
import { WHY_RAFA_FEATURES, BRAND_INFO } from '../../data/brand-data';

@Component({
  selector: 'app-why-rafa',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './why-rafa.component.html'
})
export class WhyRafaComponent {
  readonly SparklesIcon = Sparkles;
  
  whyRafaFeatures = WHY_RAFA_FEATURES;
  brandInfo = BRAND_INFO;

  getIcon(iconName: string): any {
    const iconMap: Record<string, any> = {
      HeartHandshake,
      ShieldCheck,
      Sprout,
      PackageCheck,
      Eye,
      Award,
    };
    return iconMap[iconName] || Sparkles;
  }
}
