import { useRef } from "react";
import api from "../utils/api";
import { useDispatch } from "react-redux";
import { updateTodo } from "../store/actions/todoAction";
import { toast } from "react-toastify";

const Modal = ({ close, todo }) => {
  const inputRef = useRef();
  const dispatch = useDispatch();

  const handleClick = () => {
    //* 1) Inputtaki değeri al
    const newText = inputRef.current.value;
    //* 2) todo nesnesinin tile değerini ve tarihini güncelle
    const updatedTodo = {
      ...todo,
      text: newText,
      created_at: new Date().toLocaleDateString(),
    };

    //* 3) API'a güncel veriyi kaydet
    api
      .put(`/todos/${todo.id}`, updatedTodo)
      //* 4) reducera elemanın güncelleneceğini haber ver
      .then(() => dispatch(updateTodo(updatedTodo)))
      //* 5) Hata olursa yakala
      .catch((err) => alert("Üzgünüz bir hata oluştu!"));
    //* 6) modalı kapat
    close();

    toast.info("Todo Başarıyla Güncellendi!");
  };

  return (
    <div className="modal bg-black text-dark bg-opacity-50 d-flex align-items-center justify-content-center">
      <div className="modal-dialog w-75 h-50">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Todo'yu Güncelle</h5>
            <button
              onClick={close}
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body my-2">
            <label>Yeni Başlık</label>
            <input
              ref={inputRef}
              defaultValue={todo.text}
              type="text"
              className="form-control shadow mt-2"
            />
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              onClick={close}
            >
              İptal Et
            </button>
            <button
              onClick={handleClick}
              type="button"
              className="btn btn-primary"
            >
              Kaydet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
