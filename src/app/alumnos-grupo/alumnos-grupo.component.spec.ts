import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnosGrupoComponent } from './alumnos-grupo.component';

describe('AlumnosGrupoComponent', () => {
  let component: AlumnosGrupoComponent;
  let fixture: ComponentFixture<AlumnosGrupoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlumnosGrupoComponent]
    });
    fixture = TestBed.createComponent(AlumnosGrupoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
