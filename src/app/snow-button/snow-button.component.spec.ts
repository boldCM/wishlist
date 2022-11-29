import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnowButtonComponent } from './snow-button.component';

describe('SnowButtonComponent', () => {
  let component: SnowButtonComponent;
  let fixture: ComponentFixture<SnowButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnowButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SnowButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
