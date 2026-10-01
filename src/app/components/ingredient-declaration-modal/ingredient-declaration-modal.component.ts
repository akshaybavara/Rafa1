import { Component, EventEmitter, Input, Output, HostListener, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, X, ShieldCheck, Sparkles, FileText, CheckCircle2, AlertCircle } from 'lucide-angular';
import { trigger, transition, style, animate } from '@angular/animations';
import { BOTANICAL_INGREDIENTS, BRAND_INFO } from '../../data/brand-data';

@Component({
  selector: 'app-ingredient-declaration-modal',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './ingredient-declaration-modal.component.html',
  animations: [
    trigger('modalFade', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('250ms ease-out', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({ opacity: 0 }))
      ])
    ]),
    trigger('modalScale', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.94) translateY(20px)' }),
        animate('280ms cubic-bezier(0.16, 1, 0.3, 1)', style({ opacity: 1, transform: 'scale(1) translateY(0)' }))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({ opacity: 0, transform: 'scale(0.94) translateY(20px)' }))
      ])
    ])
  ]
})
export class IngredientDeclarationModalComponent implements OnChanges {
  @Input() isOpen = false;
  @Output() closeModal = new EventEmitter<void>();

  readonly XIcon = X;
  readonly ShieldCheckIcon = ShieldCheck;
  readonly SparklesIcon = Sparkles;
  readonly FileTextIcon = FileText;
  readonly CheckCircle2Icon = CheckCircle2;
  readonly AlertCircleIcon = AlertCircle;

  botanicalIngredients = BOTANICAL_INGREDIENTS;
  brandInfo = BRAND_INFO;

  @HostListener('window:keydown.escape')
  onEscapeKey() {
    if (this.isOpen) {
      this.close();
    }
  }

  ngOnChanges() {
    if (this.isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }

  ngOnDestroy() {
    document.body.style.overflow = 'unset';
  }

  close() {
    this.closeModal.emit();
  }
}
