import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveAddBookComponent } from './reactive-add-book.component';

describe('ReactiveAddBookComponent', () => {
  let component: ReactiveAddBookComponent;
  let fixture: ComponentFixture<ReactiveAddBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveAddBookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveAddBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
