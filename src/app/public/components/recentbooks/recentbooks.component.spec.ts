import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentbooksComponent } from './recentbooks.component';

describe('RecentbooksComponent', () => {
  let component: RecentbooksComponent;
  let fixture: ComponentFixture<RecentbooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentbooksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentbooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
