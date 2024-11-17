import ActionTypes from "../actionTypes";

/*
  ! reducer
  * State'in nasıl değişeceğine karar verir.
  * reducer normal bir fonksiyondur.
  * Bu fonksiyon iki parametre alır:
  * >> state: reducer da tutulan verilerin son durumudur
  * >> action: verilerin nasıl değişeceğini ifade eden nesnedir
  
  * useReducer'dan farklı olarak initialState'i state parametresine
  * varsayılan değer olarak veririz.

*/

const initialState = {
  todos: [],
  isDarkMode: true,
};

const todoReducer = (state = initialState, action) => {
  console.log(action);
  //* Aksiyonun type ına göre gerekli güncellemeyi yap.
  switch (action.type) {
    // Eğer ADD aksiyonu çalışırsa:
    case ActionTypes.ADD:
      return {
        ...state,
        todos: state.todos.concat(action.payload),
      };
    case ActionTypes.DELETE:
      // Diziden silinecek elemanı kaldır.
      const filtred = state.todos.filter((i) => i.id !== action.payload);
      // Reducerda tutlan todos değerini güncelle
      return { ...state, todos: filtred };
    case ActionTypes.UPDATE:
      // Todos dizisini map ile dön.İçerisinde ki her
      // bir verinin idsi ile benim tıkladığım todonun idsi
      // eşit ise yerine actiondan gelen payloadı koy değilse eski halinde dönder
      const updateArr = state.todos.map((i) =>
        i.id === action.payload.id ? action.payload : i
      );

      return { ...state, todos: updateArr };

    case ActionTypes.SET:
      return { ...state, todos: action.payload };
  }

  return state;
};

export default todoReducer;
