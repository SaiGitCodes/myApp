import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablechildComponent } from './tablechild.component';

fdescribe('TablechildComponent', () => {
  let component: TablechildComponent;
  let fixture: ComponentFixture<TablechildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TablechildComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TablechildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should cover ng', () => {
    const data = <any>{ target: { value: 'test' } };
    component.onActionEmit(data);
    expect(component.onActionEmit).toBeDefined();
  })
});
