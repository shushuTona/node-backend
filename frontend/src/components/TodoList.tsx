import apiClient from '../lib/apiClient';
import { useState, useEffect, FC } from 'react';
import {
    useRecoilState,
} from 'recoil';
import todoListState from '../store/atoms/todoListAtom';
import './TodoList.css';
import TodoListItem from './TodoListItem';

const TodoList: FC = () => {
    const [todoList, setTodoList] = useRecoilState( todoListState );
    const [isLoaded, setIsLoaded] = useState( true );

    useEffect( () => {
        apiClient
            .get<Todo[]>( '/api/todo/user_id/1' )
            .then( (res) => {
                console.log( res.data );

                setTodoList( res.data );
                setIsLoaded( false );
            } );
    }, [] );

    if ( isLoaded ) {
        return <p>Loading...</p>
    }

    return (
        <ul className="todo-list">
            {
                ( todoList.length !== 0 )
                    ? todoList.map( ( todo ) => {
                            return <TodoListItem key={todo.id} todo={todo} />
                        } )
                    : <p>タスクはありません。</p>
            }
        </ul>
    )
}

export default TodoList;
