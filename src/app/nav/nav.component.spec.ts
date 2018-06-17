import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavComponent } from './nav.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { RouterLinkWithHref } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [NavComponent]
    });

    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should have a link to todos page', () => {
    /* const de = fixture.debugElement.query(By.css('a'));
    expect(de.properties['href']).toBe('/todos'); */
    const debugElements: DebugElement[] = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));
    const index = debugElements.findIndex((de) => de.properties['href'] === '/todos');
    expect(index).toBeGreaterThan(-1);
  });
});
