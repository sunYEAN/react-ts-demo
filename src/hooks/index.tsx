import React, {useState} from 'react';
import './index.css';

import InputBox from './InputBox';
import {func} from "prop-types";

type TodoItem = {
    id: number,
    title: string,
    desc: string,
    finished: boolean // 是否完成
};
interface TodoListTypes {
    list: Array<TodoItem>
}



function TodoList (props: TodoListTypes) {

    const [addStatus, setStatus] = useState(false);

    return (
        <main className='wrap'>
            <ul className="list-wrap">
                {
                    props.list.map((item, index) => (
                        <li key={index} className="item">{item.title}</li>
                    ))
                }
            </ul>

            <InputBox onMaskTap={() => {
                setStatus(false)
            }} active={addStatus}/>

            <footer className='action-bar'>
                <button onClick={() => {
                    setStatus(!addStatus);
                }}>+</button>
            </footer>
        </main>
    )
}

TodoList.defaultProps = {
    list: []
};
export default TodoList;
