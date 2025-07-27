import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyServicesComponent } from './faculty-services.component';

describe('FacultyServicesComponent', () => {
  let component: FacultyServicesComponent;
  let fixture: ComponentFixture<FacultyServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FacultyServicesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FacultyServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
