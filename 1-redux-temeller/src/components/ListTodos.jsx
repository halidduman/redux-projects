import { useSelector } from "react-redux";
import TodoCard from "./TodoCard";

const ListTodos = () => {
  /*
   * storeda ki verileri almak için useSelector ile abone olduk.
   * Direkt store u return edersek uyarı verir(çok fazla render)
   * Genelde sadece ihtiyacımız olan reducer a abone oluruz.
   */
  const storeState = useSelector((store) => store.todoReducer);
  console.log(storeState);
  return (
    <div>
      {storeState.todos.map((todo) => (
        <TodoCard key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default ListTodos;
