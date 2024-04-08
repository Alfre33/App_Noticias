import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoNoticiasJagfComponent } from './listado-noticias-jagf.component';

describe('ListadoNoticiasJagfComponent', () => {
  let component: ListadoNoticiasJagfComponent;
  let fixture: ComponentFixture<ListadoNoticiasJagfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoNoticiasJagfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoNoticiasJagfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
