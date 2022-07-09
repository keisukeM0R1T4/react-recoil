import { useRecoilValue } from 'recoil';
import { todoListState } from '../atom';
import TodoListStats from './TodoListStats';
import TodoItemCreator from './TodoItemCreator';

function TodoList() {
    const todoList = useRecoilValue(todoListState);    

    return (
        <>
            <h1>RecoilによるTodoアプリ</h1>
            <TodoListStats />
            <TodoItemCreator />
            {todoList.map((item) => (
                <div key={item.id}>{item.title}</div>
            ))}
        </>
    );
}

export default TodoList;