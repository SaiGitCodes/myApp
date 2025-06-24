import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HighlightComponent } from './highlight.component';
import { FilterPipe } from '../../pipes/filter.pipe';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

fdescribe('HighlightComponent', () => {
  let component: HighlightComponent;
  let fixture: ComponentFixture<HighlightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HighlightComponent, FilterPipe],
      imports: [MatInputModule,
        BrowserAnimationsModule,
        FormsModule]
    })
      .compileComponents();
    fixture = TestBed.createComponent(HighlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.results = [];
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should call on updateSearch', () => {
    const data = { target: { value: 'd' } };
    // let searchTerm = data;
    component.updateSearch(data);
    expect(component.updateSearch).toBeDefined();
  });

  test('should call on updateSearch', () => {
    component.Add();
    expect(component.Add).toBeDefined();
  });


});
