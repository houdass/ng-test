import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';
import { from, throwError } from 'rxjs';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let service: TodoService;

  beforeEach(() => {
    service = new TodoService(null);
    component = new TodosComponent(service);
  });

  it('Should set todos property with the items', () => {
    const todos = [1, 2, 3];
    spyOn(service, 'getTodos').and.callFake(() => {
      return from([
        todos
      ]);
    });
    component.ngOnInit();
    expect(component.todos).toBe(todos);
  });

  it('Should call the server to save the changes when a new todo item is added', () => {
    const spy = spyOn(service, 'add').and.callFake(() => from([]));
    component.add();
    expect(spy).toHaveBeenCalled();
  });

  it('Should add the new todo returned from the server', () => {
    const todo = { id: '1' };
    /* spyOn(service, 'add').and.callFake(() => from([todo])); */
    spyOn(service, 'add').and.returnValue(from([todo]));
    component.add();
    expect(component.todos.indexOf(todo)).toBeGreaterThan(-1);
  });

  it('Should set the message property if server returns a error when adding a new todo', () => {
    const error = 'Error from the server !!!';
    spyOn(service, 'add').and.returnValue(throwError(error));
    component.add();
    expect(component.message).toBe(error);
  });

  it('Should call the server to delete a todo item if a user confirms', () => {
    spyOn(window, 'confirm').and.returnValue(true);
    const spy = spyOn(service, 'delete').and.returnValue(from([]));
    component.delete(2);
    expect(spy).toHaveBeenCalledWith(2);
  });

  it('Should NOT call the server to delete a todo item if a user cancels', () => {
    spyOn(window, 'confirm').and.returnValue(false);
    const spy = spyOn(service, 'delete').and.returnValue(from([]));
    component.delete(2);
    expect(spy).not.toHaveBeenCalled();
  });
});
