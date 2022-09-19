type todoStatus = typeof import( '../todoStatusList' ).todoStatusList[number];

interface Todo {
    id: number;
    title: string;
    content: string;
    assignee_id: number;
    status: todoStatus;
}
