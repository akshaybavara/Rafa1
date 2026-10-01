import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Sparkles, ShieldCheck, Clock, Check, ArrowRight, Play, RefreshCw } from 'lucide-angular';
import { PROCESS_STEPS } from '../../data/brand-data';
import { PatchTestModalComponent } from '../patch-test-modal/patch-test-modal.component';

@Component({
  selector: 'app-how-it-works',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, PatchTestModalComponent],
  templateUrl: './how-it-works.component.html'
})
export class HowItWorksComponent {
  readonly SparklesIcon = Sparkles;
  readonly ShieldCheckIcon = ShieldCheck;
  readonly ClockIcon = Clock;
  readonly CheckIcon = Check;
  readonly ArrowRightIcon = ArrowRight;
  readonly PlayIcon = Play;
  readonly RefreshCwIcon = RefreshCw;

  processSteps = PROCESS_STEPS;
  activeStep = 0;
  isPatchModalOpen = false;

  setActiveStep(index: number) {
    this.activeStep = index;
  }
}
