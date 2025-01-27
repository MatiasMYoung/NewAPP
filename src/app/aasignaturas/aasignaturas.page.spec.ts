import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AAsignaturasPage } from './aasignaturas.page';

describe('AAsignaturasPage', () => {
  let component: AAsignaturasPage;
  let fixture: ComponentFixture<AAsignaturasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AAsignaturasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
