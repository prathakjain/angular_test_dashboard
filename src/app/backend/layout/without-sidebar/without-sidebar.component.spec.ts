import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WithoutSidebarComponent } from './without-sidebar.component';

describe('WithoutSidebarComponent', () => {
  let component: WithoutSidebarComponent;
  let fixture: ComponentFixture<WithoutSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WithoutSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithoutSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
