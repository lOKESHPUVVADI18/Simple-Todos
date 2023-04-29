// Write your code here

import './index.css'

const TodoItem = props => {
  const {todoItems, onDelete} = props
  const {title, id} = todoItems

  const onDeleteItem = () => {
    onDelete(id)
  }

  return (
    <li className="todo-list-item">
      <p>{title}</p>
      <button type="button" className="button" onClick={onDeleteItem}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
