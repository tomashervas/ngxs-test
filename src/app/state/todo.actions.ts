export class AddTodo {
    static readonly type = '[Todo] Add';
    constructor(public payload: string) {}
}

export class RemoveTodo {
    static readonly type = '[Todo] Remove';
    constructor(public payload: number) {}
}

export class ToogleTodo {
    static readonly type = '[Todo] Toogle';
    constructor(public payload: number) {}
}