import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tema5Component } from './tema5.component';

describe('Tema5Component', () => {
  let component: Tema5Component;
  let fixture: ComponentFixture<Tema5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tema5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tema5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
