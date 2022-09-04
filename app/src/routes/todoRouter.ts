import express from 'express';

const todoRootPath = '/todo';
const todoRouter = express.Router();

// 指定IDのTodoを取得する
todoRouter.get( '/:id', ( req, res ) => {
    const id = req.params.id;
    res.send( '/api/todo/:id : ' + id );
} );

// 指定User IDのTodo一覧を取得する
todoRouter.get( '/user_id/:id', ( req, res ) => {
    const id = req.params.id;
    res.send( '/api/todo/user_id/:id : ' + id );
} );

// 新しいTodoを追加する
todoRouter.post( '/create', ( _, res ) => {
    res.send( '/api/todo/create' );
} );

// 指定IDのTodoを更新する
todoRouter.put( '/update/:id', ( req, res ) => {
    const id = req.params.id;
    res.send( '/api/todo/update/:id : ' + id );
} );

export { todoRootPath, todoRouter }
