
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResumeServiceService {

  // ✅ Use your live backend URL:
  private apiUrl = 'https://ai-resume-builder-backend-production-ac8b.up.railway.app/api/resume/generate';

  constructor(private http: HttpClient) {}

  generateResume(userDescription: string): Observable<any> {
    return this.http.post<any>(
      this.apiUrl,
      JSON.stringify(userDescription), // ✅ send raw string as JSON
      {
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
}
