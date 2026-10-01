import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Sparkles, Check, Info, ArrowRight, ShieldCheck } from 'lucide-angular';
import { PRODUCT_VARIANTS } from '../../data/brand-data';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-variant-selector',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './variant-selector.component.html',
  animations: [
    trigger('fadeSlide', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(16px)' }),
        animate('350ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ]),
      transition(':leave', [
        animate('350ms ease-in', style({ opacity: 0, transform: 'translateY(-16px)' }))
      ])
    ])
  ]
})
export class VariantSelectorComponent {
  @Output() openNotifyModal = new EventEmitter<void>();

  readonly SparklesIcon = Sparkles;
  readonly CheckIcon = Check;
  readonly InfoIcon = Info;
  readonly ArrowRightIcon = ArrowRight;
  readonly ShieldCheckIcon = ShieldCheck;

  productVariants = PRODUCT_VARIANTS;
  activeVariant = this.productVariants[0];

  selectVariant(variant: any) {
    this.activeVariant = variant;
  }
}
