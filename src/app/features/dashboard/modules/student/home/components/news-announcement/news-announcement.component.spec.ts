import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsAnnouncementComponent } from './news-announcement.component';

describe('NewsAnnouncementComponent', () => {
  let component: NewsAnnouncementComponent;
  let fixture: ComponentFixture<NewsAnnouncementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsAnnouncementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewsAnnouncementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
