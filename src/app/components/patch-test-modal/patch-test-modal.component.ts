import { Component, EventEmitter, Input, Output, HostListener, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, X, ShieldAlert, CheckCircle2, Clock, AlertTriangle } from 'lucide-angular';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-patch-test-modal',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './patch-test-modal.component.html',
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
        style({ opacity: 0, transform: 'scale(0.95) translateY(15px)' }),
        animate('250ms cubic-bezier(0.16, 1, 0.3, 1)', style({ opacity: 1, transform: 'scale(1) translateY(0)' }))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({ opacity: 0, transform: 'scale(0.95) translateY(15px)' }))
      ])
    ])
  ]
})
export class PatchTestModalComponent implements OnChanges {
  @Input() isOpen = false;
  @Output() closeModal = new EventEmitter<void>();

  readonly XIcon = X;
  readonly ShieldAlertIcon = ShieldAlert;
  readonly CheckCircle2Icon = CheckCircle2;
  readonly ClockIcon = Clock;
  readonly AlertTriangleIcon = AlertTriangle;

  patchSteps = [
    {
      step: '1. Prepare Micro Sample',
      desc: 'Mix a pinch of RAFA powder with a few drops of water in a small non-metallic bowl to form a tiny paste.',
    },
    {
      step: '2. Clean Test Area',
      desc: 'Clean and dry a small 1 cm patch of skin behind your ear or on your inner forearm.',
    },
    {
      step: '3. Apply & Leave',
      desc: 'Apply the small paste patch onto the cleaned skin. Let it dry and keep undisturbed for 48 hours.',
    },
    {
      step: '4. Observe Reaction',
      desc: 'If any redness, burning, itching, swelling or irritation occurs, wash immediately and do not use the product. If no reaction occurs after 48 hours, proceed with full application.',
    },
  ];

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
