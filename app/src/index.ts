import express from 'express';

const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();

app.get( '/', ( _, res ) => {
  res.send( 'node express server.' );
} );

app.listen( PORT, HOST, () => {
  console.log( `Listening on port ${PORT}` );
} );
