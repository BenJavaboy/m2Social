import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatbookComponent } from './catbook.component';

describe('CatbookComponent', () => {
  let component: CatbookComponent;
  let fixture: ComponentFixture<CatbookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatbookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
