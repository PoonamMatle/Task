import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelCompComponent } from './model-comp.component';

describe('ModelCompComponent', () => {
  let component: ModelCompComponent;
  let fixture: ComponentFixture<ModelCompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModelCompComponent]
    });
    fixture = TestBed.createComponent(ModelCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
