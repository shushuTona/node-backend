import { PrismaClient, Todo } from '@prisma/client';

const prisma = new PrismaClient();

// get all todo from todo table by todo id.
const getTodo = async ( todoId: number ) => {
    const result = await prisma.todo.findMany( {
                                                                where: { id: todoId }
                                                            } );

    await prisma.$disconnect();

    return result;
}

// get all todo from todo table by user id.
const getUserTodo = async ( userId: number ) => {
    const result = await prisma.todo.findMany( {
                                                                where: { assignee_id: userId }
                                                            } );

    await prisma.$disconnect();

    return result;
}

// create new todo item to todo table.
const createTodo = async (todo: Todo) => {
    const result = await prisma.todo.create( {
                                                            data: todo
                                                        } );

    await prisma.$disconnect();

    return result;
}

// update title, content, assignee_id, status of existing todo data in todo table.
const updateTodo = async ( todoId: number, updateData: Pick<Todo, 'title' | 'content' | 'assignee_id' | 'status'>) => {
    const result = await prisma.todo.update( {
                                                                where: {
                                                                    id: todoId
                                                                },
                                                                data: updateData
                                                            } );

    await prisma.$disconnect();

    return result;
}

export { getTodo, getUserTodo, createTodo, updateTodo }
