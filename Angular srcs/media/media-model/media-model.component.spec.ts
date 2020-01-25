import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaModelComponent } from './media-model.component';

describe('MediaModelComponent', () => {
  let component: MediaModelComponent;
  let fixture: ComponentFixture<MediaModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
