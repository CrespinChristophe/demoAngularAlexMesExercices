import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionTachesComponent } from './gestion-taches.component';

describe('GestionTachesComponent', () => {
  let component: GestionTachesComponent;
  let fixture: ComponentFixture<GestionTachesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionTachesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionTachesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
