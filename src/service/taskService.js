import { observable, decorate, action } from "mobx"
import React from 'react';

export default class taskService extends React.Component{

    mockup = 
    [
        {
            "id":"1",
            "named":"Exercise",
            "done":false,
            "dueDate":"2020-02-05"
        },
        {
            "id":"2",
            "named":"Clean House",
            "done":true,
            "dueDate":"2020-07-05"
        }
    ]
    
    create() {

    }

    delete() {

    }

    edit() {

    }

    get() {
        return this.mockup
    }
}
    
decorate(taskService, {
    mockup: observable,
    create: action.bound,
    delete: action.bound,
    edit: action.bound,
    get: action.bound
})

    // cardData = 
    // [
    //     {
    //         "id":"1",
    //         "taskId":"1",
    //         "description":"Run to Efieltower",
    //         "label":"green"
    //     },
    //     {
    //         "id":"2",
    //         "taskId":"2",
    //         "description":"Toilet, Living room, Barbershop",
    //         "label":"blue"
    //     },
    // ]
    
// constructor(id, named){
//     this.id = id
//     this.named = named
//     this.done = false
//     this.dueDate = Date.now()
// }