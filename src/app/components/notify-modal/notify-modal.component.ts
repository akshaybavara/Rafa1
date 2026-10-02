import { Component, EventEmitter, Input, Output, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LucideAngularModule, X, Sparkles, CheckCircle2, Bell, ShieldCheck, Mail, Phone, User, MessageCircle, MessageSquare } from 'lucide-angular';
import { trigger, transition, style, animate, state } from '@angular/animations';
import { BrandDataService, WaitlistRequest } from '../../services/brand-data.service';

@Component({
  selector: 'app-notify-modal',
  standalone: true,
  imports: [CommonModule, FormsModule, LucideAngularModule],
  templateUrl: './notify-modal.component.html',
  animations: [
    trigger('modalFade', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('250ms ease-out', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({ opacity: 0 }))
      ])
    ]),
    trigger('modalScale', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.94) translateY(20px)' }),
        animate('280ms cubic-bezier(0.16, 1, 0.3, 1)', style({ opacity: 1, transform: 'scale(1) translateY(0)' }))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({ opacity: 0, transform: 'scale(0.94) translateY(20px)' }))
      ])
    ])
  ]
})
export class NotifyModalComponent {
  @Input() isOpen = false;
  @Output() closeModal = new EventEmitter<void>();
  @Output() success = new EventEmitter<string>();

  readonly XIcon = X;
  readonly SparklesIcon = Sparkles;
  readonly CheckCircle2Icon = CheckCircle2;
  readonly BellIcon = Bell;
  readonly ShieldCheckIcon = ShieldCheck;
  readonly MailIcon = Mail;
  readonly PhoneIcon = Phone;
  readonly UserIcon = User;
  readonly MessageCircleIcon = MessageCircle;
  readonly MessageSquareIcon = MessageSquare;

  formData = {
    name: '',
    mobile: '',
    email: '',
    preferredShade: 'Black',
    agreeWhatsapp: true,
  };

  errors: Record<string, string> = {};
  isSubmitting = false;
  isChoosingApp = false;
  isSuccess = false;
  passNumber = '';
  
  brandInfo: any;
  productVariants: any;

  constructor(private brandService: BrandDataService) {
    this.brandInfo = this.brandService.brandInfo;
    this.productVariants = this.brandService.variants;
  }

  @HostListener('window:keydown.escape')
  onEscapeKey() {
    if (this.isOpen) {
      this.close();
    }
  }

  // Prevent background scrolling when open
  ngOnChanges() {
    if (this.isOpen) {
      document.body.style.overflow = 'hidden';
      // Reset form
      this.formData = {
        name: '',
        mobile: '',
        email: '',
        preferredShade: 'Black',
        agreeWhatsapp: true,
      };
      this.errors = {};
      this.isChoosingApp = false;
      this.isSuccess = false;
    } else {
      document.body.style.overflow = 'unset';
    }
  }

  ngOnDestroy() {
    document.body.style.overflow = 'unset';
  }

  close() {
    this.closeModal.emit();
  }

  validate(): boolean {
    this.errors = {};
    if (!this.formData.name.trim()) {
      this.errors['name'] = 'Please enter your full name.';
    } else if (this.formData.name.trim().length < 2) {
      this.errors['name'] = 'Name must be at least 2 characters.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!this.formData.email.trim()) {
      this.errors['email'] = 'Please enter your email address.';
    } else if (!emailRegex.test(this.formData.email.trim())) {
      this.errors['email'] = 'Please provide a valid email address.';
    }

    const cleanMobile = this.formData.mobile.replace(/[^0-9+]/g, '');
    if (!cleanMobile) {
      this.errors['mobile'] = 'Please enter your contact number.';
    } else if (cleanMobile.length < 8 || cleanMobile.length > 15) {
      this.errors['mobile'] = 'Please enter a valid phone number (e.g. +91 98765 43210).';
    }

    return Object.keys(this.errors).length === 0;
  }

  handleSubmit() {
    if (!this.validate()) return;
    this.isChoosingApp = true;
  }

  sendDetails(channel: 'whatsapp' | 'sms') {
    this.isSubmitting = true;
    
    this.brandService.submitWaitlist(this.formData, channel).subscribe(response => {
      this.isSubmitting = false;
      this.isChoosingApp = false;
      this.isSuccess = true;
      this.passNumber = response.data?.passNumber || `RF-${Math.floor(1000 + Math.random() * 9000)}`;
      this.success.emit(this.formData.name);
    });
  }

  selectShade(shadeName: string) {
    this.formData.preferredShade = shadeName;
  }

  clearError(field: string) {
    if (this.errors[field]) {
      this.errors[field] = '';
    }
  }
}
