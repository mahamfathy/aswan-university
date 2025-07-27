import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentServicesComponent } from './parent-services.component';

describe('ParentServicesComponent', () => {
  let component: ParentServicesComponent;
  let fixture: ComponentFixture<ParentServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentServicesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParentServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
