import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HighlightDirective } from './highlight.directive';
import { By } from '@angular/platform-browser';
import { Component, DebugElement } from '@angular/core';

@Component({
  template: `
    <p appHighlight="cyan">First</p>
    <p appHighlight>Second</p>
  `
})
class DirectiveHostComponent {}

describe('HighlightDirective', () => {
  let fixture: ComponentFixture<DirectiveHostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DirectiveHostComponent, HighlightDirective]
    });

    fixture = TestBed.createComponent(DirectiveHostComponent);
    fixture.detectChanges();
  });

  it('Should highlight the first element with cyan', () => {
    const de: DebugElement = fixture.debugElement.queryAll(By.css('p'))[0];
    expect(de.nativeElement.style.backgroundColor).toBe('cyan');
  });

  it('Should highlight the second element with default background color', () => {
    const de: DebugElement = fixture.debugElement.queryAll(By.css('p'))[1];
    const directive = de.injector.get(HighlightDirective);
    expect(de.nativeElement.style.backgroundColor).toBe(directive.defaultColor);
  });
});
