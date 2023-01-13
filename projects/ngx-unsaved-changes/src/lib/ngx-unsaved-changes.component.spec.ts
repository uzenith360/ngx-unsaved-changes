import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxUnsavedChangesComponent } from './ngx-unsaved-changes.component';

describe('NgxUnsavedChangesComponent', () => {
  let component: NgxUnsavedChangesComponent;
  let fixture: ComponentFixture<NgxUnsavedChangesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxUnsavedChangesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxUnsavedChangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
