import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([])],
      declarations: [AppComponent, NavComponent],
      // schemas: [NO_ERRORS_SCHEMA]
    });

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should have a router outlet', () => {
    // const de = fixture.debugElement.query(By.css('router-outlet'));
    const de = fixture.debugElement.query(By.directive(RouterOutlet));
    expect(de).not.toBeNull();
  });
});
