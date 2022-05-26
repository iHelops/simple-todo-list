import { observer } from "mobx-react-lite";
import Todo from "./components/Todo/Todo";
import Header from "./components/Header/Header";
import todoStore from "./store/todo"
import TodoInput from "./components/TodoInput/TodoInput";

function App() {
	return (
		<>
			<Header />
			<Todo container>
                {todoStore.sortedTodo().map((item, index) => 
                    <Todo item text={item.text} complited={item.complited} id={item.id} key={index}/>
                )}
            </Todo>
            <TodoInput/>
		</>
	);
}

export default observer(App);
