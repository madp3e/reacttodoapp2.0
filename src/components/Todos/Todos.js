import React, { Component, useState } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';

import style from "./Todos.module.css"

const Todo = (props) => {

    return ( 
        <div className={style.todoTable}>
            <TableContainer component={Paper} >
                <Table className="" aria-label="simple table">
                <TableHead>
                    <TableRow>
                    <TableCell>TODOS</TableCell>
                    <TableCell align="center">Status</TableCell>
                    <TableCell align="right">Edit</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.todos.map((todo) => (
                    <TableRow key={todo.id}>
                        <TableCell>{todo.todo}</TableCell>
                        
                        {todo.completed
                        ? 
                        <TableCell align="center"><Checkbox onClick={() => props.handleChange(todo.id)} defaultChecked color="primary" inputProps={{ 'aria-label': 'secondary checkbox' }}/>Completed</TableCell>
                        :
                        <TableCell align="center"><Checkbox onClick={() => props.handleChange(todo.id)} color="primary" inputProps={{ 'aria-label': 'secondary checkbox' }}/>Pending</TableCell>
                        }
                        <TableCell align="right">
                                <Button onClick={() => props.delTodo(todo.id)} type="submit" size="small" className={style.deleteButton}>Delete</Button>
                        </TableCell>
                    </TableRow>
                    ))}
                </TableBody>
                </Table>
            </TableContainer>
        </div>

     );
}
 
export default Todo;