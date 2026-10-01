import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Sparkles, Check, Droplet, Clock, ShieldCheck, ArrowRight, Heart, Leaf } from 'lucide-angular';
import { BRAND_INFO } from '../../data/brand-data';
import { BrandDataService } from '../../services/brand-data.service';

@Component({
  selector: 'app-product-showcase',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './product-showcase.component.html'
})
export class ProductShowcaseComponent {
  @Output() openNotifyModal = new EventEmitter<void>();
  @Output() openPatchTestModal = new EventEmitter<void>();

  readonly SparklesIcon = Sparkles;
  readonly CheckIcon = Check;
  readonly DropletIcon = Droplet;
  readonly ClockIcon = Clock;
  readonly ShieldCheckIcon = ShieldCheck;
  readonly ArrowRightIcon = ArrowRight;
  readonly HeartIcon = Heart;
  readonly LeafIcon = Leaf;

  brandInfo: any;
  productVariants: any;
  selectedVariant: any;

  constructor(private brandService: BrandDataService) {
    this.brandInfo = this.brandService.brandInfo;
    this.productVariants = this.brandService.variants;
    this.selectedVariant = this.productVariants[0];
  }

  selectVariant(variant: any) {
    this.selectedVariant = variant;
  }
}
