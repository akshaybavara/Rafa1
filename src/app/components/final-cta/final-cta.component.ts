import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Sparkles, Bell, ArrowRight, ShieldCheck, Leaf } from 'lucide-angular';

@Component({
  selector: 'app-final-cta',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './final-cta.component.html'
})
export class FinalCtaComponent {
  @Output() openNotifyModal = new EventEmitter<void>();

  readonly SparklesIcon = Sparkles;
  readonly BellIcon = Bell;
  readonly ArrowRightIcon = ArrowRight;
  readonly ShieldCheckIcon = ShieldCheck;
  readonly LeafIcon = Leaf;
}
