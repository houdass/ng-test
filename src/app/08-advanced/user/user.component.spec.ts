import { TestBed, async, fakeAsync, tick, ComponentFixture } from '@angular/core/testing';
import { UserComponent } from './user.component';
import { UserService } from './user.service';
import { DataService } from '../shared/data.service';
import {By} from "@angular/platform-browser";

describe('Component: User', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserComponent]
    });

    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should use the user name from the service', () => {
    const userService = fixture.debugElement.injector.get(UserService);
    fixture.detectChanges();
    expect(userService.user.name).toEqual(component.user.name);
  });

  it('should display the user name if user is logged in', () => {
    component.isLoggedIn = true;
    fixture.detectChanges();
    const de = fixture.debugElement.query(By.css('p'));
    const el: HTMLElement = de.nativeElement;
    expect(el.innerText).toContain(component.user.name);
  });

  it('shouldn\'t display the user name if user is not logged in', () => {
    fixture.detectChanges();
    const de = fixture.debugElement.query(By.css('p'));
    const el: HTMLElement = de.nativeElement;
    expect(el.innerText).not.toContain(component.user.name);
  });

  it('shouldn\'t fetch data successfully if not called asynchronously', () => {
    const dataService = fixture.debugElement.injector.get(DataService);
    spyOn(dataService, 'getDetails').and.returnValue(Promise.resolve('Data'));
    fixture.detectChanges();
    expect(component.data).toBe(undefined);
  });

  it('should fetch data successfully if called asynchronously (async + whenStable)', async(() => {
    const dataService = fixture.debugElement.injector.get(DataService);
    spyOn(dataService, 'getDetails').and.returnValue(Promise.resolve('Data'));
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(component.data).toBe('Data');
    });
  }));

  it('should fetch data successfully if called asynchronously (fakeAsync + tick)', fakeAsync(() => {
    const dataService = fixture.debugElement.injector.get(DataService);
    spyOn(dataService, 'getDetails').and.returnValue(Promise.resolve('Data'));
    fixture.detectChanges();
    tick();
    expect(component.data).toBe('Data');
  }));
});
