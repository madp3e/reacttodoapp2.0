import React, { Component } from 'react';
import style from "./Title.module.css"
import todoimage from "../../images/todo.png"

const Title = () => {
    return ( 
        <div className={style.image}>
            <img src={todoimage}/>
        </div>
     );
}
 
export default Title;