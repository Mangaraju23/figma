import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionDisplayerComponent } from './section-displayer.component';

describe('SectionDisplayerComponent', () => {
  let component: SectionDisplayerComponent;
  let fixture: ComponentFixture<SectionDisplayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionDisplayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionDisplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
