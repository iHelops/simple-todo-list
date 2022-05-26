import {makeAutoObservable} from 'mobx'

class Todo {
    constructor() {
        makeAutoObservable(this)
    }

    todos = [
        {
            id: 0,
            text: "Сделать Todo List на React + MobX",
            complited: true
        }
    ]

    sortedTodo = () => {
        return this.todos.slice().sort((a, b) => a.complited - b.complited)
    }

    addTodo = text => {
        this.todos.push({id: this.todos.length, text: text, complited: false})
    }

    compliteTodo = id => {
        this.todos = this.todos.map(todo => todo.id === id ? {...todo, complited: true} : todo)
    }

    deleteTodo = id => {
        this.todos = this.todos.filter(item => item.id !== id)
    }
}

export default new Todo();