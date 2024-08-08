import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallCenterLoadChartComponent } from './call-center-load-chart.component';

describe('CallCenterLoadChartComponent', () => {
  let component: CallCenterLoadChartComponent;
  let fixture: ComponentFixture<CallCenterLoadChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CallCenterLoadChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CallCenterLoadChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
