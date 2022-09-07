import express from 'express';
import { userRootPath, userRouter } from './routes/userRouter';
import { todoRootPath, todoRouter } from './routes/todoRouter';

const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();

app.use( express.json() );
app.use( express.urlencoded( { extended: true } ) );

// setting router
app.use( '/api' + userRootPath, userRouter );
app.use( '/api' + todoRootPath, todoRouter );

app.listen( PORT, HOST, () => {
  console.log( `Listening on port ${PORT}` );
} );
