import { Reorder, AnimatePresence } from 'framer-motion';
import Todo from './Todo';
import styles from './TodoList.module.css';

function TodoList({ todos, setTodos, deleteTodo, toggleTodo }) {
  return (
    <div className={styles.todoListContainer}>
      {!todos.length && <h2>Todo list is empty</h2>}
      <Reorder.Group axis="y" values={todos} onReorder={setTodos}>
        <AnimatePresence>
          {todos.map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              deleteTodo={deleteTodo}
              toggleTodo={toggleTodo}
            />
          ))}
        </AnimatePresence>
      </Reorder.Group>
    </div>
  );
}

export default TodoList;
