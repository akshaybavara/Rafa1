import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, ShieldCheck, Check, X, Sparkles, AlertCircle } from 'lucide-angular';
import { BRAND_INFO } from '../../data/brand-data';

@Component({
  selector: 'app-transparency-section',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './transparency-section.component.html'
})
export class TransparencySectionComponent {
  readonly ShieldCheckIcon = ShieldCheck;
  readonly CheckIcon = Check;
  readonly XIcon = X;
  readonly SparklesIcon = Sparkles;
  readonly AlertCircleIcon = AlertCircle;

  brandInfo = BRAND_INFO;

  whatWeStandFor = [
    { title: 'Hair Colour + Care', desc: 'Harmonizing tone deposition with nourishing botanical conditioning in every session.' },
    { title: 'Hair-Care Botanicals', desc: 'Nine standardized herbs including Aloe Vera, Amla, Bhringraj, Shikakai, and Kalonji.' },
    { title: 'Patch Test Before Every Use', desc: 'Advocating 48-hour individual sensitivity checks for responsible personal wellness.' },
    { title: 'Transparent Ingredient Communication', desc: 'Full ingredient list declared openly so you always know what touches your hair.' },
  ];

  whatWeRefuseToClaim = [
    { title: '100% Chemical-Free', reason: 'Misleading marketing cliché; pure water and botanicals are natural biochemical compounds.' },
    { title: 'Cures Dandruff', reason: 'RAFA is a cosmetic personal-care brand, not an unlicensed medical pharmaceutical treatment.' },
    { title: 'Stops Hair Fall Completely', reason: 'Hair shedding involves complex genetics, diet, and stress; we refuse false silver bullets.' },
    { title: 'Safe for Everyone Without Testing', reason: 'Allergies can occur with natural plant matter; patch testing remains indispensable.' },
  ];
}
