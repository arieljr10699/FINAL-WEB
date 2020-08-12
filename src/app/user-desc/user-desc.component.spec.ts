import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDescComponent } from './user-desc.component';

describe('UserDescComponent', () => {
  let component: UserDescComponent;
  let fixture: ComponentFixture<UserDescComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDescComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
