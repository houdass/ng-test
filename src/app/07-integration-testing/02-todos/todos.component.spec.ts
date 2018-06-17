import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';
import { HttpClientModule } from '@angular/common/http';
import { from } from 'rxjs';

// NOTE: I've deliberately excluded this suite from running
// because the test will fail. This is because we have not
// provided the TodoService as a dependency to TodosComponent.
//
// When you get to Lecture 6 (Providing Dependencies), be sure
// to remove 'x' from 'xdescribe' below.

describe('TodosComponent', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ TodosComponent ],
      providers: [TodoService]
    });

    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;
  });

  // as Observable
  it('Should load todos from the server', () => {
    const service = TestBed.get(TodoService);
    // const service = fixture.debugElement.injector.get<TodoService>(TodoService as any);
    spyOn(service, 'getTodos').and.returnValue(from([[1, 2, 3]]));
    component.useObservable();
    fixture.detectChanges();
    expect(component.todos.length).toBe(3);
  });

  // as Promise (async)
  it('Should load todos from the server', async(() => {
    const service = TestBed.get(TodoService);
    spyOn(service, 'getTodosPromise').and.returnValue(Promise.resolve([1, 2, 3]));
    component.usePromise();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(component.todos.length).toBe(3);
    });
  }));

  // as Promise (fakeAsync)
  it('Should load todos from the server', fakeAsync(() => {
    const service = TestBed.get(TodoService);
    spyOn(service, 'getTodosPromise').and.returnValue(Promise.resolve([1, 2, 3]));
    component.usePromise();
    fixture.detectChanges();
    tick();
    expect(component.todos.length).toBe(3);
  }));
});
