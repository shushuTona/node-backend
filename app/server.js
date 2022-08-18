import express from 'express';

const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();

app.get( '/', ( req, res ) => {
    res.send( 'node express server' );
} )

app.listen( 8080, HOST, () => {
    console.log( `Listening on port ${ PORT }` );
} );
