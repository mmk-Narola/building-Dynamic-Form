import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReusablecompFormComponent } from './reusablecomp-form.component';

describe('ReusablecompFormComponent', () => {
  let component: ReusablecompFormComponent;
  let fixture: ComponentFixture<ReusablecompFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReusablecompFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReusablecompFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
