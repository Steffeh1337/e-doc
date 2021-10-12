import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoproprietariFormComponent } from './coproprietari-form.component';

describe('CoproprietariFormComponent', () => {
  let component: CoproprietariFormComponent;
  let fixture: ComponentFixture<CoproprietariFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoproprietariFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoproprietariFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
