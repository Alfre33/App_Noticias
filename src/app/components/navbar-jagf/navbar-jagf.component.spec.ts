import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarJagfComponent } from './navbar-jagf.component';

describe('NavbarJagfComponent', () => {
  let component: NavbarJagfComponent;
  let fixture: ComponentFixture<NavbarJagfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarJagfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarJagfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
