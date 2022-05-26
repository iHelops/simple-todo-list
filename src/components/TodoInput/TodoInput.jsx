import React, {useState} from "react";
import todoStore from "../../store/todo"
import style from './TodoInput.module.css'

function TodoInput() {
    const [value, setValue] = useState()

	return (
		<>
			<div className={style['add-todo']}>
				<div className="container">
                    <div className={style['input-wraper']}>
                        <h3>Добавить новую задачу</h3>
                        <input type="text" placeholder="Введите задачу" onChange={e => {setValue(e.target.value)}}/>
                        <button onClick={() => {if (value) todoStore.addTodo(value)}}>Добавить</button>
                    </div>
                </div>
			</div>
		</>
	);
}

export default TodoInput;
