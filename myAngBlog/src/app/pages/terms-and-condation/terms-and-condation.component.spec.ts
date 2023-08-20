import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsAndCondationComponent } from './terms-and-condation.component';

describe('TermsAndCondationComponent', () => {
  let component: TermsAndCondationComponent;
  let fixture: ComponentFixture<TermsAndCondationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TermsAndCondationComponent]
    });
    fixture = TestBed.createComponent(TermsAndCondationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
