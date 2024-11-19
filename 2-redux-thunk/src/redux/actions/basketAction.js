import { v4 } from "uuid";
import api from "../../utils/api";
import ActionTypes from "../actionTypes";

//* Sepete yeni eleman ekleyecek fonksiyondur
export const addToBasket = (product, rest) => (dispatch) => {
  //* 1.adım:Sepete eklenilecek olan ürünün bilgilerini belirleyelim
  const newItem = {
    id: v4(),
    productId: product.id,
    title: product.title,
    price: product.price,
    photo: product.photo,
    restaurantName: rest.name,
    amount: 1,
  };
  //* 2.adım:Elemanı api ye ekle
  api.post("/cart", newItem).then(() =>
    //* 3.adım:Veri apiye eklenirse reducera da gönder
    dispatch({
      type: ActionTypes.ADD_TO_CART,
      payload: newItem,
    })
  );
};
//* Sepetteki elemanı günceller (miktar arttırma/azaltma)
export const updateItem = (id, newAmount) => (dispatch) => {
  //* 1.adım:API'de bulunan elemanı güncelle
  api
    .patch(`/cart/${id}`, { amount: newAmount })
    .then((res) => {
      console.log(res);
      //* 2.adım:İstek başarılı olursa reducer'a haber ver.
      dispatch({
        type: ActionTypes.UPDATE_CART,
        payload: res.data, //* güncellenecek item
      });
    })
    .catch((err) =>
      //* 3.adım:İşlem gerçekleşmezse err içerisindeki mesajı reducer'a gönder
      dispatch({ type: ActionTypes.ERROR_CART, payload: err.message })
    );
};

export const deleteItem = (id) => (dispatch) => {
  api.delete(`/cart/${id}`).then(() =>
    dispatch({
      type: ActionTypes.DELETE_FROM_CART,
      payload: id,
    })
  );
};
