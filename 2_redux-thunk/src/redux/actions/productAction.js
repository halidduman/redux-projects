// THUNK Aksiyonu
import ActionTypes from "../actionTypes";
import api from "../../utils/api";

export const getProducts = (restId) => (dispatch) => {
  //* reducera yüklenmenin başladığını bildiriyoruz
  dispatch({
    type: ActionTypes.PRODUCT_LOADING,
  });

  api
    .get(`products?restaurantId=${restId}`)
    .then((res) =>
      // istek başarılı olursa reducera verileri gönderiyoruz
      dispatch({
        type: ActionTypes.PRODUCT_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) =>
      // istek başarısız olursa reducera hata mesajını
      dispatch({
        type: ActionTypes.PRODUCT_ERROR,
        payload: err.message,
      })
    );
};
