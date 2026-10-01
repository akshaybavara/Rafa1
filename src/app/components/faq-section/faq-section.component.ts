import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LucideAngularModule, ChevronDown, HelpCircle, Sparkles, Search } from 'lucide-angular';
import { FAQS } from '../../data/brand-data';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-faq-section',
  standalone: true,
  imports: [CommonModule, FormsModule, LucideAngularModule],
  templateUrl: './faq-section.component.html',
  animations: [
    trigger('expandCollapse', [
      state('collapsed', style({ height: '0px', opacity: 0, overflow: 'hidden' })),
      state('expanded', style({ height: '*', opacity: 1, overflow: 'hidden' })),
      transition('collapsed <=> expanded', animate('250ms ease-in-out'))
    ])
  ]
})
export class FaqSectionComponent {
  readonly ChevronDownIcon = ChevronDown;
  readonly HelpCircleIcon = HelpCircle;
  readonly SparklesIcon = Sparkles;
  readonly SearchIcon = Search;

  faqs = FAQS;
  openId: string | null = this.faqs[0].id;
  searchQuery = '';
  activeCategory = 'all';

  categories = [
    { id: 'all', label: 'All Questions' },
    { id: 'product', label: 'Product & Shades' },
    { id: 'usage', label: 'Application & Safety' },
    { id: 'ingredients', label: 'Botanical Ingredients' },
    { id: 'launch', label: 'Availability & Launch' },
  ];

  get filteredFaqs() {
    return this.faqs.filter(faq => {
      const matchesCategory = this.activeCategory === 'all' || faq.category === this.activeCategory;
      const matchesSearch =
        faq.question.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(this.searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }

  toggleItem(id: string) {
    this.openId = this.openId === id ? null : id;
  }

  setCategory(categoryId: string) {
    this.activeCategory = categoryId;
  }
}
