import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinnerJagfComponent } from './spinner-jagf.component';

describe('SpinnerJagfComponent', () => {
  let component: SpinnerJagfComponent;
  let fixture: ComponentFixture<SpinnerJagfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpinnerJagfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpinnerJagfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
