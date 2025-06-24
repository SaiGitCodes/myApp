import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';
import { Router } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MAT_NAV_LIST, MatListModule } from '@angular/material/list';
import { RouterTestingModule } from '@angular/router/testing';
import { StoryComponent } from '../story/story.component';
import { MatLineModule } from '@angular/material/core';


// class MockRouter {
//   navigate(url: string) {
//     return url;
//   }
// }

fdescribe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarComponent],
      // providers: [
      //   { provide: Router, useClass: MockRouter }
      // ],
      imports: [MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        BrowserAnimationsModule,
        MatListModule,
        RouterTestingModule.withRoutes([{ path: "app/story", component: StoryComponent }])]
    })
      .compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should create onNavigate', () => {
    component.onNavigate();
    expect(component.onNavigate).toBeTruthy();
  });
});
