import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Sparkles, ArrowRight, ShieldCheck, Leaf, HeartHandshake, CheckCircle2 } from 'lucide-angular';
import { BRAND_INFO } from '../../data/brand-data';
import { BrandDataService } from '../../services/brand-data.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './hero.component.html'
})
export class HeroComponent {
  @Output() openNotifyModal = new EventEmitter<void>();
  @Output() discoverClick = new EventEmitter<void>();

  readonly SparklesIcon = Sparkles;
  readonly ArrowRightIcon = ArrowRight;
  readonly ShieldCheckIcon = ShieldCheck;
  readonly LeafIcon = Leaf;
  readonly HeartHandshakeIcon = HeartHandshake;
  readonly CheckCircle2Icon = CheckCircle2;

  brandInfo: any;

  constructor(private brandService: BrandDataService) {
    this.brandInfo = this.brandService.brandInfo;
  }
}
