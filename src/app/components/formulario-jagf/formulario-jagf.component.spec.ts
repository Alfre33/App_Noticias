import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioJagfComponent } from './formulario-jagf.component';

describe('FormularioJagfComponent', () => {
  let component: FormularioJagfComponent;
  let fixture: ComponentFixture<FormularioJagfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioJagfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioJagfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
