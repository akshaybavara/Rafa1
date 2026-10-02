import { Component, EventEmitter, Output, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Bell, Sparkles, Clock, Shield, Gift, Users } from 'lucide-angular';

@Component({
  selector: 'app-launching-soon',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './launching-soon.component.html'
})
export class LaunchingSoonComponent implements OnInit, OnDestroy {
  @Output() openNotifyModal = new EventEmitter<void>();

  readonly BellIcon = Bell;
  readonly SparklesIcon = Sparkles;
  readonly ClockIcon = Clock;
  readonly ShieldIcon = Shield;
  readonly GiftIcon = Gift;
  readonly UsersIcon = Users;

  timeLeft = {
    days: '42',
    hours: '14',
    minutes: '36',
    seconds: '28',
  };

  private intervalId: any;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    // Target date approximately 42 days from now
    const target = new Date(Date.now() + (42 * 24 * 60 * 60 + 14 * 3600 + 36 * 60 + 28) * 1000).getTime();

    this.intervalId = setInterval(() => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        
        this.timeLeft = { 
          days: String(days).padStart(2, '0'), 
          hours: String(hours).padStart(2, '0'), 
          minutes: String(minutes).padStart(2, '0'), 
          seconds: String(seconds).padStart(2, '0') 
        };
        this.cdr.detectChanges();
      }
    }, 1000);
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  get timeUnits() {
    return [
      { label: 'Days', value: this.timeLeft.days },
      { label: 'Hours', value: this.timeLeft.hours },
      { label: 'Minutes', value: this.timeLeft.minutes },
      { label: 'Seconds', value: this.timeLeft.seconds },
    ];
  }
}
