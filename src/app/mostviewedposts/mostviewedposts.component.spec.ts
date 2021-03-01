import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostviewedpostsComponent } from './mostviewedposts.component';

describe('MostviewedpostsComponent', () => {
  let component: MostviewedpostsComponent;
  let fixture: ComponentFixture<MostviewedpostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostviewedpostsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostviewedpostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
