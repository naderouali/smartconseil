import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Whoweare2Component } from './whoweare2.component';

describe('Whoweare2Component', () => {
  let component: Whoweare2Component;
  let fixture: ComponentFixture<Whoweare2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Whoweare2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Whoweare2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
