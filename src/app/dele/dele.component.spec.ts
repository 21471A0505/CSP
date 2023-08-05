import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleComponent } from './dele.component';

describe('DeleComponent', () => {
  let component: DeleComponent;
  let fixture: ComponentFixture<DeleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
