import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const main = async () => {
    await prisma.todoStatus.createMany( {
        data: [
            { name: 'draft' },
            { name: 'doing' },
            { name: 'pending' },
            { name: 'completed' },
        ],
    } );
}

main()
    .then( async () => {
        await prisma.$disconnect()
    } )
    .catch( async ( e ) => {
        console.error( e )
        await prisma.$disconnect()
        process.exit( 1 )
    } )