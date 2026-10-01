import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, CheckCircle2, Sparkles, X } from 'lucide-angular';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './toast.component.html',
  animations: [
    trigger('toastFadeSlide', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px) scale(0.95)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0) scale(1)' }))
      ]),
      transition(':leave', [
        animate('300ms ease-out', style({ opacity: 0, transform: 'translateY(20px) scale(0.95)' }))
      ])
    ])
  ]
})
export class ToastComponent {
  @Input() message: string | null = null;
  @Output() closeToast = new EventEmitter<void>();

  readonly SparklesIcon = Sparkles;
  readonly XIcon = X;
  readonly CheckCircle2Icon = CheckCircle2;
}
