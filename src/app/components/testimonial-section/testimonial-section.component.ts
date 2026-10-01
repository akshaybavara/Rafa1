import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Sparkles, MessageSquareHeart, CheckCircle2, Users, Shield } from 'lucide-angular';

@Component({
  selector: 'app-testimonial-section',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './testimonial-section.component.html'
})
export class TestimonialSectionComponent {
  @Output() openNotifyModal = new EventEmitter<void>();

  readonly SparklesIcon = Sparkles;
  readonly MessageSquareHeartIcon = MessageSquareHeart;
  readonly CheckCircle2Icon = CheckCircle2;
  readonly UsersIcon = Users;
  readonly ShieldIcon = Shield;
}
