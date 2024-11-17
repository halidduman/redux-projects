import { v4 } from "uuid";
import api from "../utils/api";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../store/actions/todoAction";
import { toast } from "react-toastify";

const AddForm = () => {
  //* Bu bileşen içerisinde dispathc methodunu kullanmamızı sağlar.
  const dispatch = useDispatch();

  const state = useSelector((store) => store);
  console.log(state);

  //* Form gönderildiğinde çalışır
  const handleSubmit = (e) => {
    e.preventDefault();
    //* Input boş ise durdur.
    if (!e.target[0].value) return;
    //* store a kaydedilecek olan veriyi hazırladık
    const newTodo = {
      id: v4(),
      text: e.target[0].value,
      is_done: false,
      created_at: new Date().toLocaleDateString(),
    };

    api
      .post("/todos", newTodo)
      .then(() => dispatch(addTodo(newTodo)))
      //* istek başarısız olursa
      .catch((err) => {
        throw new Error(err.message);
      });

    e.target.reset();

    toast.success("Todo Başarıyla Eklendi!");
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex gap-3 my-5">
      <input
        type="text"
        placeholder="Örn:Redux projesi"
        className="form-control"
      />
      <button className="btn btn-warning">Gönder</button>
      <button className="btn bg-white">Light Mode</button>
    </form>
  );
};

export default AddForm;
