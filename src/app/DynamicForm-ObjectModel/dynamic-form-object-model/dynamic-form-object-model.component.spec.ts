import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFormObjectModelComponent } from './dynamic-form-object-model.component';

describe('DynamicFormObjectModelComponent', () => {
  let component: DynamicFormObjectModelComponent;
  let fixture: ComponentFixture<DynamicFormObjectModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicFormObjectModelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicFormObjectModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
