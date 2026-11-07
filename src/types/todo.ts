export interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

export type todoFormEvent = React.FormEvent<HTMLFormElement>