import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Injectable({
  providedIn: 'root'
})
export class ProfesorGuard implements CanActivate {
  constructor(private apiService: ApiService, private router: Router) {}

  canActivate(): boolean {
    const user = this.apiService.getCurrentUser();
    if (user && user.tipoPerfil === 1) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
