import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {
  BRAND_INFO,
  PRODUCT_VARIANTS,
  BOTANICAL_INGREDIENTS,
  WHY_RAFA_FEATURES,
  PROCESS_STEPS,
  FAQS
} from '../data/brand-data';

export interface WaitlistRequest {
  name: string;
  email: string;
  mobile: string;
  preferredShade: string;
  agreeWhatsapp: boolean;
}

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data?: T;
}

@Injectable({
  providedIn: 'root'
})
export class BrandDataService {
  // Configured for local ASP.NET Core backend
  private apiUrl = 'http://localhost:5128/api';

  // Use static data by default for zero-latency UI rendering, 
  // mirroring the React app's local data approach

  get brandInfo() { return BRAND_INFO; }
  get variants() { return PRODUCT_VARIANTS; }
  get ingredients() { return BOTANICAL_INGREDIENTS; }
  get features() { return WHY_RAFA_FEATURES; }
  get processSteps() { return PROCESS_STEPS; }
  get faqs() { return FAQS; }

  constructor(private http: HttpClient) { }

  submitWaitlist(request: WaitlistRequest, channel: 'whatsapp' | 'sms' = 'whatsapp'): Observable<ApiResponse<any>> {
    // ==========================================
    // NO-API FRONTEND SOLUTION (WhatsApp/SMS Redirect)
    // ==========================================
    
    const OWNER_MOBILE_NUMBER = '919627842153'; // Replace with your WhatsApp number with country code (e.g., 91 for India)
    
    const message = `*New RAFA Lead!*\n\n*Name:* ${request.name}\n*Mobile:* ${request.mobile}\n*Email:* ${request.email}\n*Shade:* ${request.preferredShade}`;
    
    if (channel === 'whatsapp') {
      const whatsappUrl = `https://wa.me/${OWNER_MOBILE_NUMBER}?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    } else {
      window.open(`sms:+${OWNER_MOBILE_NUMBER}?body=${encodeURIComponent(message)}`, '_self');
    }

    // ==========================================
    // Normal UI Success simulation
    // ==========================================
    return of({
      success: true,
      message: 'Redirected to messaging app',
      data: {
        passNumber: `RF-${Math.floor(1000 + Math.random() * 9000)}`,
        name: request.name
      }
    });
  }
}
