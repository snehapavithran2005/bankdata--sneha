import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginbankComponent } from './loginbank.component';

describe('LoginbankComponent', () => {
  let component: LoginbankComponent;
  let fixture: ComponentFixture<LoginbankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginbankComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginbankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
