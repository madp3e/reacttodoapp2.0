import React, { Component, useEffect,useState } from 'react';
import {TextField, Button} from '@material-ui/core/';

import style from "./AddTodo.module.css"

const AddTodo = (props) => {

    var [todoItem, setTodoItem] = useState("")

    const onChange = (e) => {
        setTodoItem(e.target.value)
        
    }

    const onSubmit = (e) => {
        e.preventDefault()
        if (todoItem == "") {
            alert("no todos added!")
        }else{
            props.addTodo(todoItem)
        }
        setTodoItem("")
    }

    return ( 
        <div>
            <form onSubmit={onSubmit} className={style.addForm} noValidate autoComplete="off">
                <TextField onChange={onChange} value={todoItem} id="standard-basic" placeholder="Add Todo.." />{" "}
                <Button type="submit" size="small" variant="contained" className={style.addButton}>Submit</Button>
            </form>
        </div>
        );
}
 
export default AddTodo;