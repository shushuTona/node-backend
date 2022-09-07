import express, { Request, Response } from 'express';
import { Todo } from '@prisma/client';
import { getTodo, getUserTodo, createTodo, updateTodo } from '../models/todoModels';

const todoRootPath = '/todo';
const todoRouter = express.Router();

type ErrorResponse = {
    error: string;
}

type todoRequestParams = {
    id: string
}

// get target todo list  by todo id.
todoRouter.get( '/:id', async ( req: Request<todoRequestParams>, res: Response<Todo[] | ErrorResponse> ) => {
    const id = req.params.id;
    const result = await getTodo( Number(id) );
    res.json( result );
} );

// get todo list target user have by todo id.
todoRouter.get( '/user_id/:id', async ( req: Request<todoRequestParams>, res: Response<Todo[] | ErrorResponse> ) => {
    const id = req.params.id;
    const result = await getUserTodo( Number( id ) );
    res.json( result );
} );

// add new todo item to todo table.
todoRouter.post( '/create', async ( req: Request<{}, {}, Todo>, res: Response<Todo | ErrorResponse> ) => {
    const todo = req.body;
    const result = await createTodo( todo );
    res.json( result );
} );

// update target todo item by todo id.
todoRouter.put( '/update/:id', async ( req: Request<todoRequestParams, {}, Todo>, res: Response<Todo | ErrorResponse> ) => {
    const id = req.params.id;
    const todo = req.body;
    const result = await updateTodo( Number( id ), todo );

    res.json( result );
} );

export { todoRootPath, todoRouter }
