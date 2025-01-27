import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CursoQrPage } from './curso-qr.page';

describe('CursoQrPage', () => {
  let component: CursoQrPage;
  let fixture: ComponentFixture<CursoQrPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoQrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
