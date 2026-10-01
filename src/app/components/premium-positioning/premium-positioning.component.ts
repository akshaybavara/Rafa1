import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Sparkles, Check, X, ShieldCheck, Heart, ArrowRight } from 'lucide-angular';
import { BRAND_INFO } from '../../data/brand-data';

@Component({
  selector: 'app-premium-positioning',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './premium-positioning.component.html'
})
export class PremiumPositioningComponent {
  @Output() openNotifyModal = new EventEmitter<void>();

  readonly SparklesIcon = Sparkles;
  readonly CheckIcon = Check;
  readonly ArrowRightIcon = ArrowRight;

  brandInfo = BRAND_INFO;
}
