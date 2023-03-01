import styles from './Button.module.css';

function Button(props) {
  const { onClick, children, title, disabled = false } = props;

  return (
    <button
      {...props} // если мы какие-то свойства не указали явно, то они тоже будут скопированы
      className={styles.button}
      onClick={onClick} // 10 и 11 строку можно удалить если есть 8 строка в ней так же передаются сабмит свойство
      title={title} //
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
