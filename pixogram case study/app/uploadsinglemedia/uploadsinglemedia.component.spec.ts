import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadsinglemediaComponent } from './uploadsinglemedia.component';

describe('UploadsinglemediaComponent', () => {
  let component: UploadsinglemediaComponent;
  let fixture: ComponentFixture<UploadsinglemediaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadsinglemediaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadsinglemediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
