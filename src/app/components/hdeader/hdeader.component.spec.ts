import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HdeaderComponent } from './hdeader.component';

describe('HdeaderComponent', () => {
  let component: HdeaderComponent;
  let fixture: ComponentFixture<HdeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HdeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HdeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
