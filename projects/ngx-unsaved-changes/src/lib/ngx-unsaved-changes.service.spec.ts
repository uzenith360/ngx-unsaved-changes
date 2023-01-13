import { TestBed } from '@angular/core/testing';

import { NgxUnsavedChangesService } from './ngx-unsaved-changes.service';

describe('NgxUnsavedChangesService', () => {
  let service: NgxUnsavedChangesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxUnsavedChangesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
