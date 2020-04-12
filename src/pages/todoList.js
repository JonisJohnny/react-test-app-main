import React from 'react';
import Task from '../components/task';

import tasksService from "../service/taskService";
let tasksServiceClass = new tasksService();
function Tasks (){
    return (
        tasksServiceClass.get().map(t => {
           return <Task key={t.id}
                name = {t.named}
                id = {t.id}
                dueDate = {t.dueDate}
                done = {t.done}
                info = {t.id}
            />
        })
    )
}

function TodoList () {
    return (
        <div>
            Add new task:
            <Task />
            <hr />
            <Tasks />
        </div>
    );
}

export default TodoList;