import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlumnoAsignaturasPage } from './alumno-asignaturas.page';

describe('AlumnoAsignaturasPage', () => {
  let component: AlumnoAsignaturasPage;
  let fixture: ComponentFixture<AlumnoAsignaturasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnoAsignaturasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
