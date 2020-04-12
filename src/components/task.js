import React from 'react';

function Task(props) {
    return (
        <div>
            <form>
                <input type="checkbox" checked={props.done} />
                <input type="text" value={props.name} placeholder="Add what todo..." />
                DueDate:<input type="date" value={props.dueDate} />
                <input type="hidden" value={props.id} />
                <button onClick={props.id}></button>
            </form>
        </div>
    );
}
export default Task;