import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallEntryComponent } from './call-entry.component';

describe('CallEntryComponent', () => {
  let component: CallEntryComponent;
  let fixture: ComponentFixture<CallEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CallEntryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CallEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
