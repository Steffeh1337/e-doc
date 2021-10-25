import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermissionActionsComponent } from './permission-actions.component';

describe('PermissionActionsComponent', () => {
  let component: PermissionActionsComponent;
  let fixture: ComponentFixture<PermissionActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PermissionActionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PermissionActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
