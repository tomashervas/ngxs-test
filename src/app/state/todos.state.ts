import { Action, Selector, State, StateContext } from "@ngxs/store";
import { Todo } from "../../todo.model";
import { AddTodo, RemoveTodo, ToogleTodo } from "./todo.actions";
import { Injectable } from "@angular/core";

export interface TodoStateModel {
    todos: Todo[];
}



@State<TodoStateModel>({
    name: 'todos',
    defaults: {
        todos: []
    }
})
@Injectable()
export class TodoState {


    @Selector()
    static todos(state: TodoStateModel) {
        return state.todos;
    }

    @Action(AddTodo)
    addTodo({ getState, setState }: StateContext<TodoStateModel>, { payload }: AddTodo) {
        const state = getState();
        const newToddo: Todo = { 
            id: state.todos.length + 1,
            title: payload,
            completed: false
        };
        const todos = [...state.todos, newToddo];
        setState({ todos });
    }

    @Action(RemoveTodo)
    removeTodo({ getState, setState }: StateContext<TodoStateModel>, { payload }: RemoveTodo) {
        const state = getState();
        const todos = state.todos.filter(todo => todo.id !== payload);
        setState({ todos });
    }


    @Action(ToogleTodo)
    toogleTodo({ getState, setState }: StateContext<TodoStateModel>, { payload }: ToogleTodo) {
        const state = getState();
        const todos = state.todos.map(todo => todo.id === payload ? { ...todo, completed: !todo.completed } : todo);
        setState({ todos });
    }



}
