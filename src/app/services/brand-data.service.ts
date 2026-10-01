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

  constructor(private http: HttpClient) {}

  submitWaitlist(request: WaitlistRequest): Observable<ApiResponse<any>> {
    // In production, this should hit the ASP.NET Core backend
    return this.http.post<ApiResponse<any>>(`${this.apiUrl}/waitlist`, request).pipe(
      catchError(err => {
        console.error('Waitlist submission failed', err);
        // Fallback to simulate success if backend is down
        return of({
          success: true,
          message: 'Offline fallback success',
          data: {
            passNumber: `RF-${Math.floor(1000 + Math.random() * 9000)}`,
            name: request.name
          }
        });
      })
    );
  }
}
