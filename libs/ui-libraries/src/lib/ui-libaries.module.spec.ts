import { async, TestBed } from '@angular/core/testing';
import { UiLibrariesModule } from './ui-libraries.module';

describe('UiLibariesModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UiLibrariesModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(UiLibrariesModule).toBeDefined();
  });
});
