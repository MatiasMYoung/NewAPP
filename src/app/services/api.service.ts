import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:5000'; // Cambia esto si tu API está en otro puerto
  private currentUser: any;

  constructor(private http: HttpClient) {}

  login(user: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { user, password }).pipe(
      tap(response => {
        this.currentUser = response;
      })
    );
  }

  getCurrentUser() {
    return this.currentUser;
  }

  getCursosProfesor(profesorId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/profesores/${profesorId}/cursos`);
  }

  getAlumnosCurso(cursoId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/cursos/${cursoId}/alumnos`);
  }

  getAsignaturasAlumno(alumnoId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/alumnos/${alumnoId}/asignaturas`);
  }
}
