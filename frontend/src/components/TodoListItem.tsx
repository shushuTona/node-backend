import apiClient from '../lib/apiClient';
import { useState, FC, ChangeEvent, ChangeEventHandler } from 'react';
import { todoStatusList } from '../todoStatusList';
import {
    useSetRecoilState
} from 'recoil';
import todoListState from '../store/atoms/todoListAtom';

type Props = {
    todo: Todo
}

interface StatusChangeEvent extends HTMLSelectElement {
    value: todoStatus
}

const TodoListItem: FC<Props> = ( { todo } ) => {
    const [isEdit, setIsEdit] = useState( false );
    const [ title, setTitle ] = useState( todo.title );
    const [ content, setContent ] = useState( todo.content );
    const [status, setStatus] = useState<todoStatus>( todo.status );
    const setTodoList = useSetRecoilState( todoListState );

    const editHandler = () => {
        setIsEdit( ( currentValue ) => !currentValue );
    }

    const cancelHandler = () => {
        setIsEdit( false );
        setTitle( todo.title );
        setContent( todo.content );
        setStatus( todo.status );
    }

    const updateHandler = async () => {
        apiClient.put( '/api/todo/update/' + todo.id, {
                                title,
                                content,
                                assignee_id: todo.assignee_id,
                                status,
                            } )
                            .then( ( res ) => {
                                setTodoList( ( currentTodoList ) => {
                                    return currentTodoList.map( ( todo ) => {
                                        return todo.id === res.data.id
                                                    ? res.data
                                                    : todo;
                                    } );
                                } );

                                setIsEdit( false );
                            } )
                            .catch( ( err ) => {
                                console.log( err );
                            } );
    }

    const changeTitleHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
        setTitle( event.currentTarget.value );
    }

    const changeContentHandler: ChangeEventHandler<HTMLInputElement> = ( event ) => {
        setContent( event.currentTarget.value );
    }

    const changeStatusHandler = ( event: ChangeEvent<StatusChangeEvent> ) => {
        setStatus( event.currentTarget.value );
    }

    return (
        <li className="todo-list-item">
            <div className="todo-list-item-inner">
                <p>
                    <span>title : </span>
                    {
                        isEdit
                            ? <input type="text" value={title} onChange={changeTitleHandler} />
                            : todo.title
                    }
                </p>
                <p>
                    <span>content : </span>
                    {
                        isEdit
                            ? <input type="text" value={content} onChange={changeContentHandler} />
                            : todo.content
                    }
                </p>
                <p>
                    <span>status : </span>
                    {
                        isEdit
                            ? <select value={status} onChange={changeStatusHandler}>
                                    {
                                        todoStatusList.map( ( todoStatus ) => <option key={todoStatus} value={todoStatus}>{ todoStatus }</option> )
                                    }
                            </select>
                            : todo.status
                    }
                </p>
            </div>

            {
                !isEdit
                    ? <button type='button' onClick={editHandler} className="todo-list-item-edit-btn">edit</button>
                    : <div className="todo-list-item-btn-wrapper">
                        <button type='button' onClick={cancelHandler} className="todo-list-item-cancel-btn">cancel</button>
                        <button
                            type='button'
                            className="todo-list-item-update-btn"
                            onClick={updateHandler}
                            disabled={ title === todo.title && content === todo.content && status === todo.status }>update</button>
                    </div>
            }
        </li>
    )
}

export default TodoListItem;
