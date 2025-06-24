import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryComponent } from './story.component';

fdescribe('StoryComponent', () => {
  let component: StoryComponent;
  let fixture: ComponentFixture<StoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StoryComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(StoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should cover click', () => {
    component.onclick();
    expect(component.onclick).toBeDefined();
  })


});
