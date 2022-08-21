const esbuild = require( 'esbuild' );
const path = require( 'node:path' );

const isWatch = process.argv.includes( '--watch' );

const buildOptions = {
    outfile: path.resolve( __dirname, './server.cjs' ),
    bundle: true,
    platform: 'node',
    entryPoints: [
        './src/index.ts'
    ],
    minify: true,
    watch: isWatch && {
        onRebuild ( err, result ) {
            console.log( 'Rebuilded' );
            console.log( 'err', err );
            console.log( 'result', result );
        }
    }
}

esbuild.build( buildOptions ).catch( ( err ) => {
    console.log( err );
} );
