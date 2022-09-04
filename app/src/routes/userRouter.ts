import express from 'express';

const userRootPath = '/user';
const userRouter = express.Router();

// 指定IDのUserを取得する
userRouter.get( '/:id', ( req, res ) => {
    const id = req.params.id;
    res.send( '/api/user/:id : ' + id );
} );

// 新しいUserを追加する
userRouter.post( '/create', ( _, res ) => {
    res.send( '/api/user/create' );
} );

// 指定IDのUserを更新する
userRouter.put( '/update/:id', ( req, res ) => {
    const id = req.params.id;
    res.send( '/api/user/update/:id : ' + id );
} );

export { userRootPath, userRouter }
