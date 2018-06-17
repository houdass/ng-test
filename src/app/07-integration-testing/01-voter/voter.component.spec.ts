import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VoterComponent } from './voter.component';
import { By } from '@angular/platform-browser';

describe('VoterComponent', () => {
  let component: VoterComponent;
  let fixture: ComponentFixture<VoterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VoterComponent]
    });

    fixture = TestBed.createComponent(VoterComponent);
    component = fixture.componentInstance;
  });

  it('Should render total votes', () => {
    component.othersVote = 9;
    component.myVote = 1;
    fixture.detectChanges();
    const de = fixture.debugElement.query(By.css('.vote-count'));
    const el: HTMLElement = de.nativeElement;

    expect(el.innerText).toContain('10');
  });

  it('Should highlight the upvote button if I have upvoted', () => {
    component.myVote = 1;
    fixture.detectChanges();

    const de = fixture.debugElement.query(By.css('.glyphicon-menu-up'));

    expect(de.classes['highlighted']).toBeTruthy();
  });

  it('Should increase total votes when I click upvote button', () => {
    const button = fixture.debugElement.query(By.css('.glyphicon-menu-up'));
    button.triggerEventHandler('click', null);
    expect(component.totalVotes).toBe(1);
  });
});
