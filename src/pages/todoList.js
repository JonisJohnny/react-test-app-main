import React from 'react';
import Task from '../components/task';

import tasksService from "../service/taskService";
let tasksServiceClass = new tasksService();

function create(){
  document.getElementById("createForm")
}

function Tasks (){
    return (
        tasksServiceClass.get().map(t => {
           return <Task key={t.id}
                name = {t.named}
                id = {t.id}
                dueDate = {t.dueDate}
                done = {t.done}
                info = {t.id}
                create = {create}
            />
        })
    )
}

function TodoList () {
    return (
        <div>
            Add new task:
            <form id="createForm">
              <Task 
              name={} />
            </form>
            <hr />
            <Tasks />
        </div>
    );
}

export default TodoList;