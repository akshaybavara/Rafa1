import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Sparkles, Leaf, Eye, Droplets, Sun, Wind, ShieldCheck, Crown, Layers, Sparkle } from 'lucide-angular';
import { BOTANICAL_INGREDIENTS } from '../../data/brand-data';
import { IngredientDeclarationModalComponent } from '../ingredient-declaration-modal/ingredient-declaration-modal.component';

@Component({
  selector: 'app-ingredients-section',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, IngredientDeclarationModalComponent],
  templateUrl: './ingredients-section.component.html'
})
export class IngredientsSectionComponent {
  isModalOpen = false;
  activeFilter = 'all';
  selectedIngredient: any = null;

  readonly LeafIcon = Leaf;
  readonly EyeIcon = Eye;

  botanicalIngredients = BOTANICAL_INGREDIENTS;

  filterTabs = [
    { id: 'all', label: 'All 9 Botanicals' },
    { id: 'colour', label: 'Tone Binding' },
    { id: 'conditioning', label: 'Conditioning & Shine' },
    { id: 'cleansing', label: 'Strand Clarifying' },
    { id: 'scalp', label: 'Scalp Environment' },
  ];

  getIcon(iconName: string): any {
    const iconMap: Record<string, any> = {
      Sparkles,
      Droplets,
      Sun,
      Wind,
      Sparkle,
      ShieldCheck,
      Crown,
      Leaf,
      Layers,
    };
    return iconMap[iconName] || Leaf;
  }

  get filteredIngredients() {
    if (this.activeFilter === 'all') {
      return this.botanicalIngredients;
    }
    return this.botanicalIngredients.filter(item => item.category === this.activeFilter);
  }

  setFilter(filterId: string) {
    this.activeFilter = filterId;
  }

  openIngredient(ingredient: any) {
    this.selectedIngredient = ingredient;
  }
}
