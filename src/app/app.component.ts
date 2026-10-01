import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { LaunchingSoonComponent } from './components/launching-soon/launching-soon.component';
import { AboutSectionComponent } from './components/about-section/about-section.component';
import { FounderSectionComponent } from './components/founder-section/founder-section.component';
import { ProductShowcaseComponent } from './components/product-showcase/product-showcase.component';
import { VariantSelectorComponent } from './components/variant-selector/variant-selector.component';
import { WhyRafaComponent } from './components/why-rafa/why-rafa.component';
import { IngredientsSectionComponent } from './components/ingredients-section/ingredients-section.component';
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';
import { PremiumPositioningComponent } from './components/premium-positioning/premium-positioning.component';
import { TransparencySectionComponent } from './components/transparency-section/transparency-section.component';
import { TestimonialSectionComponent } from './components/testimonial-section/testimonial-section.component';
import { FaqSectionComponent } from './components/faq-section/faq-section.component';
import { FinalCtaComponent } from './components/final-cta/final-cta.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotifyModalComponent } from './components/notify-modal/notify-modal.component';
import { PatchTestModalComponent } from './components/patch-test-modal/patch-test-modal.component';
import { ToastComponent } from './components/toast/toast.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    HeroComponent,
    LaunchingSoonComponent,
    AboutSectionComponent,
    FounderSectionComponent,
    ProductShowcaseComponent,
    VariantSelectorComponent,
    WhyRafaComponent,
    IngredientsSectionComponent,
    HowItWorksComponent,
    PremiumPositioningComponent,
    TransparencySectionComponent,
    TestimonialSectionComponent,
    FaqSectionComponent,
    FinalCtaComponent,
    FooterComponent,
    NotifyModalComponent,
    PatchTestModalComponent,
    ToastComponent
  ],
  templateUrl: './app.component.html'
})
export class AppComponent {
  isNotifyModalOpen = false;
  isPatchTestModalOpen = false;
  toastMessage: string | null = null;
  toastTimeout: any;

  handleOpenNotify() {
    this.isNotifyModalOpen = true;
  }

  handleCloseNotify() {
    this.isNotifyModalOpen = false;
  }

  handleNotifySuccess(name: string) {
    this.toastMessage = `Welcome, ${name}! Your early launch pass is secured.`;
    if (this.toastTimeout) {
      clearTimeout(this.toastTimeout);
    }
    this.toastTimeout = setTimeout(() => {
      this.toastMessage = null;
    }, 6000);
  }

  handleDiscoverClick() {
    const el = document.getElementById('product');
    if (el) {
      const headerOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  }

  handleOpenPatchTestModal() {
    this.isPatchTestModalOpen = true;
  }
}
