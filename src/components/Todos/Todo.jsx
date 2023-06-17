import { Reorder } from 'framer-motion';
import { RiTodoFill, RiDeleteBin2Line } from 'react-icons/ri';
import { FaCheck } from 'react-icons/fa';
import styles from './Todo.module.css';

const variants = {
  initial: {
    opacity: 0,
    height: 1,
  },
  animate: {
    opacity: 1,
    height: 'auto',
  },
  exit: {
    opacity: 0,
    height: 1,
  },
  transition: {
    duration: 0.5,
  },
  whileDrag: {
    scale: 1.05,
  },
};

function Todo({ todo, deleteTodo, toggleTodo }) {
  return (
    <Reorder.Item
      value={todo}
      {...variants}
      className={`${styles.todo} ${
        todo.isCompleted ? styles.completedTodo : ''
      }`}
    >
      <RiTodoFill className={styles.todoIcon} />
      <div className={styles.todoText}>{todo.text}</div>
      <RiDeleteBin2Line
        className={styles.deleteIcon}
        onClick={() => deleteTodo(todo.id)}
      />
      <FaCheck
        className={styles.checkIcon}
        onClick={() => toggleTodo(todo.id)}
      />
    </Reorder.Item>
  );
}

export default Todo;
