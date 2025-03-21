import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleNextPageComponent } from './example-next-page.component';

describe('ExampleNextPageComponent', () => {
  let component: ExampleNextPageComponent;
  let fixture: ComponentFixture<ExampleNextPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [ExampleNextPageComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(ExampleNextPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
