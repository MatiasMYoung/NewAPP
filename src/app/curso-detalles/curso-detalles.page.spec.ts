import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CursoDetallesPage } from './curso-detalles.page';

describe('CursoDetallesPage', () => {
  let component: CursoDetallesPage;
  let fixture: ComponentFixture<CursoDetallesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoDetallesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
