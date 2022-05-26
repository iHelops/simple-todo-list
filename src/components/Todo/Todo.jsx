import React from 'react'
import style from './Todo.module.css'
import todoStore from "../../store/todo"

function Card(props) {
    if (props.container) {
        return (
            <div className={style.cards}>
                <div className="container">
                    {props.children}
                </div>
            </div>
        )
    } else {
        return (
            <div className={style['cards-item']}>
                <h3>{props.text}</h3>
                <p>{props.text}</p>
                
                {(props.complited) ? (
                    <div className={style.buttons}>
                        <div className={style.complited}>Выполнен</div>
                        <div className={style.delete} onClick={() => {todoStore.deleteTodo(props.id)}}>Удалить</div>
                    </div>
                ) : (
                    <div className={style.buttons}>
                        <div className={style['in-process']}>В процессе</div>
                        <div className={style.complite} onClick={() => {todoStore.compliteTodo(props.id)}}>Отметить как выполненное</div>
                    </div>
                )}
            </div>
        )
    }
}

export default Card