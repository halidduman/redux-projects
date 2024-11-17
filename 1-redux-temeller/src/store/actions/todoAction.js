/*
 * Aksiyon Nesnesi oluşturan Fonksiyon
 * payload değeri dinamik olacağı için fonksiyonları tercih ettik
 * ve payload değerinni parametre olarak aldık
 * Bu fonksiyonlar çağrıdığında bir aksiyon nesnesi dönderir
 * Bileşen içerisindeki dispatch alanındaki kodları kısaltıp daha okunabilir yapıyoruz.
 */

import ActionTypes, { ADD } from "../actionTypes";

export const addTodo = (payload) => {
  return {
    type: ActionTypes.ADD,
    payload,
  };
};

export const deleteTodo = (payload) => ({
  type: ActionTypes.DELETE,
  payload,
});

export const updateTodo = (payload) => ({
  type: ActionTypes.UPDATE,
  payload,
});

export const setTodos = (payload) => ({
  type: ActionTypes.SET,
  payload,
});
