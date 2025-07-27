import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraduatesServicesComponent } from './graduates-services.component';

describe('GraduatesServicesComponent', () => {
  let component: GraduatesServicesComponent;
  let fixture: ComponentFixture<GraduatesServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraduatesServicesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GraduatesServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
