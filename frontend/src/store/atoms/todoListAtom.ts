import {
    atom,
} from 'recoil';

const todoListState = atom<Todo[]>( {
    key: 'todoListState',
    default: []
} );

export default todoListState;
