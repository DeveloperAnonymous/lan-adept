import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YikesComponent } from './yikes.component';

describe('YikesComponent', () => {
  let component: YikesComponent;
  let fixture: ComponentFixture<YikesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YikesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
