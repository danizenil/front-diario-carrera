import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneradorEntrenamientoComponent } from './generador-entrenamiento.component';

describe('GeneradorEntrenamientoComponent', () => {
  let component: GeneradorEntrenamientoComponent;
  let fixture: ComponentFixture<GeneradorEntrenamientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneradorEntrenamientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneradorEntrenamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
